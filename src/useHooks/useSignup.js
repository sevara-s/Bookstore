import { useMutation } from "@tanstack/react-query";
import { useAxios } from ".";

export const useSignUp = () => {
  const request = useAxios();
  return useMutation((userData) =>
    request({ url: "/signup", method: "POST", body: userData })
  );
};
