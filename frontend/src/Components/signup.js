import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/signup', values)
      .then(res => console.log("Registered successfully!!"))
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen mt-16">
      <div>
        <div className='text-left pr-20  mb-64 pl-20'>
          <h1 className='text-4xl '>Hey Welcome,</h1>
          <h1 className='text-4xl '>Wanna find the instruments? Sign up here</h1>
        </div>
      </div>
      <div className="w-full max-w-md bg-black border border-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-black bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
            <label htmlFor="password" className="block text-sm font-medium mb-2">
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-medium hover:underline">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;