import { useQuery } from "@tanstack/react-query";
import { useAxios } from "./useAxios"; 

export const useQueryHandler = ({ pathname, url, params }) => {
  const request = useAxios(); 

  return useQuery({
    queryKey: [pathname, params], 
    queryFn: () => request({ url, params }), 
  });
};
