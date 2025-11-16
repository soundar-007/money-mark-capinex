import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    queryKey: ["tiers"],
    queryFn: apiFunctions.getTier,
  });
};
export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: apiFunctions.getLocations,
  });
};
export const useGenders = () => {
  return useQuery({
    queryKey: ["genders"],
    queryFn: apiFunctions.getGenders,
  });
};
export const useMarital = () => {
  return useQuery({
    queryKey: ["marital_status"],
    queryFn: apiFunctions.getMaritalStatuses,
  });
};
export const useDocumentTypes = () => {
  return useQuery({
    queryKey: ["document_types"],
    queryFn: apiFunctions.getDocumentTypes,
  });
};
export const useDocumentUpload = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.documentUpload(params,leadId),
    onSuccess: () => {
      toast.success("Document uploaded successfully");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
