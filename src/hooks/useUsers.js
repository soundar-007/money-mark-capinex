import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { formatBackendErrors } from "@/lib/formatBackendErrors";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users_all"],
    queryFn: () => apiFunctions.getUsers(),
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.createUser(params),
    onSuccess: () => {
      toast.success("User Added Successfully");
      queryClient.invalidateQueries("users_all");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      console.log(res);
      toast.error(res);
    },
  });
};
export const useAccessType = () => {
  return useQuery({
    queryKey: ["access_type"],
    queryFn: () => apiFunctions.getAccessType(),
  });
};

export const useUserDetails = (userId) => {
  return useQuery({
    queryKey: ["users_details", userId],
    queryFn: () => apiFunctions.getUserDetails(userId),
    enabled: !!userId, // only fetch if userId is truthy
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => apiFunctions.updateUser(params),
    onSuccess: (_data, variables) => {
      toast.success("User updated Successfully");

      if (variables?.id) {
        queryClient.invalidateQueries(["users_details", variables.id]);
      }
      queryClient.invalidateQueries("dialer_users");
    },
    onError: (err) => {
      console.log(err);
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
export const useMakeActive = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => apiFunctions.makeActive(params),
    onSuccess: () => {
      toast.success("User updated Successfully");
      queryClient.invalidateQueries(["users_all"]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => apiFunctions.deleteUser(params),
    onSuccess: () => {
      toast.success("User Deleted Successfully");
      queryClient.invalidateQueries(["users_all"]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
export const useResetPassword = () => {
  return useMutation({
    mutationFn: (params) => apiFunctions.resetPassword(params),
    onSuccess: () => {
      toast.success("Password reset successfully");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
