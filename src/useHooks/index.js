import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAxios = () => {
  const request = async ({ url, method = "GET", headers, body, params }) => {
    try {
      const response = await axios({
        url: `${API_BASE_URL}${url}`,
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        data: body,
        params: { ...params },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || "An error occured";
    }
  };
  return request;
};
