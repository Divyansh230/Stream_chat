import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";

const Signup = () => {
  const [authUser,setAuthUser]=useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("Password", "");
  const confirmPassword = watch("ConfirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Password and Confirm password don't match";
  };

  const onSubmit = async(data) => {
    const userInfo = {
      name: data.Username,
      email: data.Email,
      password: data.Password,
      confirmPassword: data.ConfirmPassword,
    };

   await axios.post("http://localhost:3000/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if(response.data){
          alert("Signup successfull! You can now log in.")
        }
        localStorage.setItem("streamchat",response.data)
        setAuthUser(response.data)
      })
      .catch((error) => {
        if(error.response){
          alert("Error:error.response.data.error")
        }
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
              <h2 className="text-2xl font-semibold text-gray-800">Create a new <span className="text-slate-600">Account</span></h2>
              <p className="text-gray-500 mt-1">It's free and always will be</p>
            </div>

            <div className="space-y-4">
              <div className="group">
                <input
                  type="email"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Email"
                  {...register("Email", { required: true })}
                />
                {errors.Email && <span className="text-red-500">Email is required</span>}
              </div>

              <div className="group">
                <input
                  type="text"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Username"
                  {...register("Username", { required: true })}
                />
                {errors.Username && <span className="text-red-500">Username is required</span>}
              </div>

              <div className="group">
                <input
                  type="password"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Password"
                  {...register("Password", { required: true, minLength: 6 })}
                />
                {errors.Password && <span className="text-red-500">Password is required (Min 6 characters)</span>}
              </div>

              <div className="group">
                <input
                  type="password"
                  className="input input-bordered w-full bg-gray-50 p-3 rounded-lg border-2 border-gray-200 focus-within:border-slate-500"
                  placeholder="Confirm Password"
                  {...register("ConfirmPassword", { required: true, validate: validatePasswordMatch })}
                />
                {errors.ConfirmPassword && <span className="text-red-500">{errors.ConfirmPassword.message}</span>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Create Account
            </button>

            <div className="text-center mt-4 text-gray-600">
              Already have an account?
              <span className="text-slate-600 font-semibold ml-1 cursor-pointer hover:underline">Log In</span>
            </div>
          </form>

          <div className="bg-gray-50 px-6 py-4 text-center text-gray-500 text-sm border"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
