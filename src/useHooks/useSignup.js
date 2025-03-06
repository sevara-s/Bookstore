import { useMutation } from "@tanstack/react-query";
import { useAxios } from ".";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const request = useAxios();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData) =>
      request({ url: "/api/auth/sign-up", method: "POST", body: userData }),

    onSuccess: (data) => {
      console.log("Sign-up successful:", data);
      navigate("/verify");
    },

    onError: (error) => {
      console.error("Sign-up failed:", error);
    },
  });
};
