import React from "react";

const Profile = () => {
  return (
    <div className="pt-24 p-6">
      <div className="bg-[#fff7ed] p-8 rounded-2xl shadow-lg max-w-lg mx-auto border">
        <h2 className="text-3xl font-bold mb-4 text-[#4a3f35]">My Profile</h2>

        <p><strong>Name:</strong> Demo User</p>
        <p><strong>Email:</strong> user@example.com</p>

        <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
