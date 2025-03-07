import { useMutation } from "@tanstack/react-query";
// import { useAxios } from "../useAxios";
import { useAxios } from "..";

export const useProfileMutations = () => {
  const axios = useAxios();

  const editMutation = useMutation({
    mutationKey: ["editUser"],
    mutationFn: (data) =>
      axios({
        url: "api/auth/edit",
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    onSuccess: () => {
      console.success("Profile updated successfully");
    },
    onError: () => {
      console.error("Edit failed!");
    },
  });

  const changePasswordMutation = useMutation({
    mutationKey: ["changePassword"],
    mutationFn: (data) =>
      axios({
        url: "api/auth/change-password",
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    onSuccess: () => {
      console.log("Password changed successfully");
    },
    onError: () => {
      console.log("Failed to change password");
    },
  });

  return { editMutation, changePasswordMutation };
};
