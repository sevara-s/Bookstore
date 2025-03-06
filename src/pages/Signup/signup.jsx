import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../api/authApi";
import { message } from "antd";  
import signup from "../../assets/svgs/signup.svg";

const signUpSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate, isPending, isError, error } = useRegisterMutation();  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData) => {
    setIsSubmitting(true);
    mutate(
      formData,
      {
        onSuccess: (data) => {
          console.log("Signup successful:", data);
          message.success("Sign Up successful");  
          reset();
          
        },
        onError: (error) => {
          console.error("Signup failed:", error);
          let errorMessage = "Sign Up failed. Please try again.";
          if (error && typeof error === "object") {
            if (error.response) {
              errorMessage = error.response.data?.message || errorMessage;
            } else if (error.message) {
              errorMessage = error.message;
            }
          }
          message.error(errorMessage);  
          reset();
        },
        onSettled: () => setIsSubmitting(false),
      }
    );
  };

  return (
    <div className="section_login w-screen h-screen flex items-center">
      <div className="w-[50%] bg-[#CCB294] h-screen flex items-center justify-center">
        <img src={signup} alt="Signup illustration" />
      </div>
      <div className="form w-[50%]">
        <div className="w-[70%] mx-auto p-6">
          <h1 className="text-5xl font-bold mb-4">Sign up</h1>
          <div className="mb-8">  
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="First name"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.firstName ? "border-red-500" : "border-gray-200"
                }`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="mt-1 text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Last name"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                }`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="mt-1 text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending || isSubmitting}
              className="w-full py-4 px-6 bg-[#1a2642] text-white font-medium rounded-full hover:bg-[#141d33] transition-colors duration-200 disabled:opacity-70"
            >
              {isPending || isSubmitting ? "Processing..." : "Next step"}
            </button>
            {isError && <p className="text-red-500 text-sm">{error?.message || "An error occurred"}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;