import { useMutation } from "@tanstack/react-query";
import { useAxios } from ".";

export const useSignIn = () => {
  const request = useAxios();

  return useMutation({
    mutationFn: ({ email, password }) => {
      request({
        url: "/auth/sign-in",
        method: "POST",
        body: { email, password },
      });
    },
  });
};
