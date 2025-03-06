import { useMutation } from "@tanstack/react-query";
import { useAxios } from ".";

export const useVerifyCode = () => {
  const request = useAxios();

  return useMutation({
    mutationFn: (code) =>
      request({
        url: "/auth/verify",
        method: "POST",
        body: { code },
      }),
  });
};
