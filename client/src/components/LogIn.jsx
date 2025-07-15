import React from "react";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { assets } from "../assets/assets";
import AppContext from "../context/AppContext";

import { motion as Motion } from "motion/react";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const LogIn = () => {
  const { setOpen, setToken, setUser, loadCreditsData } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const formSubmit = async (data) => {
    if (!axiosInstance || !setOpen) return;
    const { name, email, password } = data;

    const payload = state === "Sign Up" ? { name, email, password } : { email, password };
    const url = state === "Sign Up" ? "/user/register" : "/user/login";

    await axiosInstance
      .post(url, payload)
      .then((res) => {
        setToken(res.data.token);
        setUser(res.data.user);
        loadCreditsData();
        localStorage.setItem("token", res.data.token);
        setOpen(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.error("Auth error:", err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm  bg-black/20 flex justify-center items-center">
      <Motion.div
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-md bg-white p-10 sm:p-10 rounded-lg shadow-lg sm:w-96 text-indigo-300 text-sm"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-black">
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </h2>
        <p className="text-center mb-4 text-neutral-600">
          {state === "Sign Up"
            ? "Create Your Account"
            : "Login To Your Account"}
        </p>

        <Motion.form
          onSubmit={handleSubmit(formSubmit)}
          initial={{ opacity: 0.2, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Full Name */}
          {state === "Sign Up" && (
            <div className="border border-gray-200 mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-neutral-100">
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
                className="text-neutral-600 bg-transparent border-none outline-none flex-1"
              />
            </div>
          )}
          {errors.fullName && (
            <p className="text-red-400 px-5 -mt-3 mb-2">
              {errors.fullName.message}
            </p>
          )}

          {/* Email */}
          <div className="border border-gray-200 mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full  bg-neutral-100">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="text-neutral-600 bg-transparent border-none outline-none flex-1"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 px-5 -mt-3 mb-2">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <div className="border border-gray-200 mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full  bg-neutral-100">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="text-neutral-600 bg-transparent border-none outline-none flex-1"
            />
          </div>
          {errors.password && (
            <p className="text-red-400 px-5 -mt-3 mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Forgot Password */}
          <p className="text-right mb-2 text-sm text-neutral-600 hover:underline cursor-pointer">
            Forgot Password?
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-full w-full cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {state}
          </button>
        </Motion.form>

        {state === "Sign Up" ? (
          <p className="text-neutral-600 text-left text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => setState("Log In")}
            >
              Log In
            </span>
          </p>
        ) : (
          <p className="text-neutral-600 text-left text-sm mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        )}

        <img
          onClick={() => setOpen(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </Motion.div>
    </div>
  );
};

export default LogIn;
