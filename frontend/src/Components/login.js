import React, { useState } from "react";
import axios from "axios";
// import Navbar from '../Components/navbar';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/login", values);

      if (response.data.success) {
        alert("Login successful!");
        navigate("/navbar"); // Redirect to a dashboard after login
      } else {
        alert(response.data.message);
        navigate("/signup"); // Redirect to Signup if user not found
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <div className="bg-black text-white flex items-center justify-center min-h-screen mt-16">
      <div>
        <div className='text-left pr-48  mb-64 pl-20'>
          <h1 className='text-4xl '>Hey Welcome Back,</h1>
          <h1 className='text-[4vw] '>We got you again..</h1>
        </div>
      </div>
      <div className="w-full max-w-md bg-black border border-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-black bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-black hover:text-white border border-white transition-colors"
          >
            Log in
          </button>
        </form>
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

    </>
  );
};

export default Login;