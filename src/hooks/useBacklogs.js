import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { formatBackendErrors } from "@/lib/formatBackendErrors";


export const useBackLogs = () => {
  return useQuery({
    queryKey: ["backlogs_all"],
    queryFn: () => apiFunctions.getBacklogs(),
  });
};

export const createBackLogs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.createBacklogs(params),
    onSuccess: () => {
      toast.success("Added Successfully");
      queryClient.invalidateQueries("backlogs_all");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useStatusChange = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.statusChange(params),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClient.invalidateQueries("backlogs_all");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
}