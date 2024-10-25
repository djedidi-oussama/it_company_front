"use client";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import {server} from "@/data/server";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [loading , setLoading] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    await axios
      .post(`${server}/users/login`, {
        username,
        password,
      },
      {
        withCredentials: true,
      })
      .then((res) => {
       
          setLoading(false)
          toast.success("Login Successful")
          window.location.reload(true)
         
         
        
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message);
        setLoading(false)
    })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-light">
      <div className="bg-card-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
          width={140}
          height={140}
          src="/logo.png" alt="Logo" className="mx-auto" />
          <h2 className="text-2xl font-semibold text-text-dark">
            Welcome Back
          </h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6 font-semibold">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-text-dark " htmlFor="username">
              Username
            </label>
            <div className="flex items-center border border-main-yellow rounded-md bg-card-hover">
              <FaEnvelope className="mx-3 text-main-yellow" />
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 bg-card-hover outline-none focus:bg-card-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-text-dark" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-main-yellow rounded-md bg-card-hover">
              <FaLock className="mx-3 text-main-yellow" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-card-hover outline-none focus:bg-card-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-main-yellow text-text-dark rounded-md hover:bg-hover-yellow transition-all duration-300"
            >
             {
              loading ? "Loading..." : "Login"
             }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
