import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export const useWriters = (categoryId) => {
  return useQuery({
    queryKey: ["writers", categoryId], 
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/writers?categoryId=${categoryId}`
      );
      console.log("Fetched Writers:", data);
      return data;
    },
    enabled: !!categoryId,  
  });
};
