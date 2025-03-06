import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSignIn } from "../../useHooks/useSignIn";

import login from "../../assets/svgs/login.svg";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});


const Login = () => {
  const { mutate, isLoading } = useSignIn();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    mutate(data, {
      onSuccess: () => {
        message.success("Sign-in successful");
        reset();
        navigate("/");
      },
      onError: (error) => {
        message.error(error.response?.data?.message || "Sign-in failed");
        setIsSubmitting(false);
      },
    });
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-[50%] bg-[#CCB294] h-screen flex items-center justify-center">
        <img src={login} alt="Login Illustration" />
      </div>

      <div className="w-[50%]">
        <div className="w-[70%] mx-auto p-6">
          <h1 className="text-5xl w-full font-bold mb-4">Sign in</h1>
          <p className="mb-8">
            Do not have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full py-4 px-6 bg-[#1a2642] text-white font-medium rounded-full hover:bg-[#141d33] transition-colors duration-200 disabled:opacity-70"
            >
              {isSubmitting || isLoading ? "Processing..." : "Next step"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
