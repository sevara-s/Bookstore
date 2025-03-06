import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAxios } from ".";

export const useSignIn = () => {
  const navigate = useNavigate();
  const request = useAxios();

  return useMutation({
    mutationFn: ({ email, password }) => {
      return request({
        url: "/api/auth/sign-in",
        method: "POST",
        body: { email, password },
      });
    },
    onSuccess: (data) => {
      navigate("/dashboard");
      console.log(data);
    },
  });
};
