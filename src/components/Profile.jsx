// components/Profile.jsx
import React from "react";
import { getToken, getUserId, logout } from "./auth";
import { FaUserCircle, FaSignOutAlt, FaEdit } from "react-icons/fa";

export default function Profile() {
  const token = getToken();

  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        <p className="text-xl font-semibold">Please login to view your profile.</p>
      </div>
    );
  }

  // Decode token safely
  let payload = {};
  try {
    payload = JSON.parse(atob(token.split(".")[1]));
  } catch (err) {
    console.error("Invalid token", err);
  }

  const userId = payload?.userId || "N/A";
  const email = payload?.email || "N/A";
  const name = payload?.name || "Anonymous";
  const joined = payload?.iat
    ? new Date(payload.iat * 1000).toLocaleDateString()
    : "N/A";

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="flex flex-col items-center text-center">
        <FaUserCircle className="text-6xl text-gray-500 mb-2" />
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>User ID:</strong> {userId}</p>
        <p><strong>Joined On:</strong> {joined}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaEdit /> Update Profile
        </button>
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}
