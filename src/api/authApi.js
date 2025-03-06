import axios from "axios";  
import { useNavigate } from "react-router-dom";
import { useAxios } from "../useHooks"; 
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";  

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const axios = useAxios();

  return useMutation({
    mutationKey: "Auth",
    mutationFn: (data) =>
      axios({
        url: "/api/auth/sign-up",  
        method: "POST",
        body: {
          first_name: data.firstName,  
          last_name: data.lastName,
          email: data.email,
          password: data.password,
        },
      }),
    onSuccess: (data) => {
      notification.success({ message: data.message || "Signup successful" });  
      navigate("/verify");  
    },
    onError: (error) => {
      console.error("Signup failed", error);  
      let errorMessage = "Sign Up failed. Please try again.";
      if (error && typeof error === "object") {
        if (error.response) {
          errorMessage = error.response.data?.message || errorMessage;
        } else if (error.isAxiosError) {
          errorMessage = error.message || "Network error. Please check your connection and try again.";
        } else if (error.message) {
          errorMessage = error.message;
        }
      }
      notification.error({ message: errorMessage });
    },
  });
};