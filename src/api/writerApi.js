import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export const useWriters = () => {
  return useQuery({
    queryKey: ["writers"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/writers");
      console.log("Fetched Writers:", data);
      return data;

    },
  });
};
