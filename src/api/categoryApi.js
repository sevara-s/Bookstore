import { useQuery } from "@tanstack/react-query";

import axiosInstance from "./axiosInstance";

const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
