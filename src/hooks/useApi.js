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

// Simple hook for getting user profile
export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: apiFunctions.getProfile,
    enabled: !!localStorage.getItem("authToken"), 
    retry: false, 
    refetchOnWindowFocus: false, 
  });
};

export const useLeads = (params = {}) => {
  return useQuery({
    queryKey: ["leads", params],
    queryFn: () => apiFunctions.getLeads(params),
  });
};

export const useCreateLead = () => {
  return useMutation({
    mutationFn: apiFunctions.createLead,
  });
};

export const useUpdateLead = () => {
  return useMutation({
    mutationFn: ({ id, data }) => apiFunctions.updateLead(id, data),
  });
};

export const useDeleteLead = () => {
  return useMutation({
    mutationFn: apiFunctions.deleteLead,
  });
};

export const useCampaigns = (params = {}) => {
  return useQuery({
    queryKey: ["campaigns", params],
    queryFn: () => apiFunctions.getCampaigns(params),
  });
};

export const useCreateCampaign = () => {
  return useMutation({
    mutationFn: apiFunctions.createCampaign,
  });
};

export const useUsers = (params = {}) => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: () => apiFunctions.getUsers(params),
  });
};
