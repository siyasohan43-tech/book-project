import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f5e9dc] p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-[#d4a373]/30">
        
        <h2 className="text-3xl text-[#4a3f35] font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#d4a373] hover:bg-[#b97b4d] text-white p-3 rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
