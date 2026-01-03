import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    age: "",
    email: "",
    education: "",
    phone: "",
    password: "",
    agreedToTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert(
        "You must agree to the terms and conditions. Note: If a book is not returned or is damaged, a fine will be charged."
      );
      return;
    }
    // For frontend-only demo, just show alert and redirect
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5e9dc] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#6F4E37] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            required
            value={formData.place}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="text"
            name="education"
            placeholder="Education"
            required
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#d4a373]"
          />

          <label className="flex items-start space-x-2 text-gray-700">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-[#6F4E37] mt-1"
            />
            <span>
              I agree to the <strong>terms and conditions</strong> (If a book is
              not returned or damaged, a fine will be charged)
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#6F4E37] text-white py-2 rounded-lg hover:bg-[#4a3f35] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-[#6F4E37] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
