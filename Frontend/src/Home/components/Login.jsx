import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.Email,
      password: data.Password,
    };

    axios.post("api/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-700 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">Stream Chat</h1>
            <p className="text-slate-200 mt-2">Connect with friends in real-time</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Log in to your <span className="text-slate-600">Account</span></h2>
              <p className="text-gray-500 mt-1">Welcome back! Please enter your details</p>
            </div>

            <div className="space-y-4">
              <div className="group">
                <input
                  type="email"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Email"
                  {...register("Email", { required: "Email is required" })}
                />
                {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
              </div>

              <div className="group">
                <input
                  type="password"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Password"
                  {...register("Password", { required: "Password is required" })}
                />
                {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Log In
            </button>

            <div className="text-center mt-4 text-gray-600">
              Don't have an account?
              <Link to={"/signup"} className="text-slate-600 font-semibold ml-1 cursor-pointer hover:underline">Sign Up</Link>
            </div>
          </form>

          <div className="bg-gray-50 px-6 py-4 text-center text-gray-500 text-sm border"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;