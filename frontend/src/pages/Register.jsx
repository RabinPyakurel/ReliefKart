import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../components";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const { fullName, email, phone, password, confirmPassword } = formData;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email.trim() || !email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!phone.trim() || phone.length !== 10)
      newErrors.phone = "Valid 10-digit phone is required.";
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special character.";
    }
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const { fullName, email, phone, password } = formData;

        const response = await fetch("http://localhost:8080/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            email,
            phone_number: phone,
            password,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        setToast({ message: "User registered successfully!", type: "success" });

        setTimeout(() => {
          setToast({ message: "", type: "" });
          navigate("/login");
        }, 2000);
      } catch (err) {
        if (err.message.includes("Email already")) {
          setErrors((prev) => ({
            ...prev,
            email: "This email is already in use.",
          }));
        } else {
          setToast({ message: err.message, type: "error" });
        }
      }
    }
  };
  return (
    <>
      {toast.message && <Toast message={toast.message} type={toast.type} />}

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
