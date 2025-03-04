import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export const useBooks = (categoryId) => {
  return useQuery({
    queryKey: ["books", categoryId],
    queryFn: async () => {
      if (!categoryId) return []; 
      const { data } = await axiosInstance.get(`/books?categoryId=${categoryId}`);
      console.log("Fetched books:", data);
      return data;
    },
    enabled: !!categoryId,  
  });
};


export const useBooksDetails = (id) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/books?id=${id}`);
      console.log("Fetched books", data);
      return data;
    },
    enabled: !!id,
  });
};
