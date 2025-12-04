import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./user/Home";
import Login from "./user/Login";
import SignupPage from "./user/SignupPage";
import Profile from "./user/Profile";
import BookDetails from "./user/BookDetails";
import AdminDashboard from "./admin/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* ADMIN ROUTE */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* FALLBACK ROUTE */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-3xl">
              404 | Page Not Found 😢
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
