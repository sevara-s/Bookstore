import { useMutation } from "@tanstack/react-query";
import { useAxios } from ".";

export const useVerifyCode = () => {
  const request = useAxios();

  return useMutation({
    mutationFn: (code) =>
      request({
        url: "/api/auth/verify-user",
        method: "POST",
        body: { code },
      }),
  });
};
