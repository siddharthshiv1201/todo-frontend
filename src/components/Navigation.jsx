// components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / App Name */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-700">
            MyTasks
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-lg font-medium">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
