import { useMutation, useQuery } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: apiFunctions.login,
    onSuccess: (data) => {
      if (data?.status === "success" && data.data?.tokens && data.data?.user) {
        login(data.data.user, data.data.tokens);
        toast.success("Login Successful");
      } else {
        toast.error("Login failed: Invalid response format");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Login Error");
    },
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: apiFunctions.getProfile,
    enabled: !!localStorage.getItem("authToken"),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: apiFunctions.getProducts,
  });
};
export const useTiers = () => {
  return useQuery({
    queryKey: ["tier"],
    queryFn: apiFunctions.getTier,
  });
};
// export const use = () => {
//   return useQuery({
//     queryKey: ["products"],
//     queryFn: apiFunctions.getProducts,
//   });
// };
// export const useProducts = () => {
//   return useQuery({
//     queryKey: ["products"],
//     queryFn: apiFunctions.getProducts,
//   });
// };
