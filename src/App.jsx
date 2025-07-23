// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { getToken } from "./components/auth";

// Protects routes: redirect to login if token not found
const PrivateRoute = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
