import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { formatBackendErrors } from "@/lib/formatBackendErrors";

export const useBackendProcessing = () => {
  return useQuery({
    queryKey: ["backend_processing"],
    queryFn: () => apiFunctions.getBackendProcessing(),
  });
};
export const useSingleBackend = (id) => {
  return useQuery({
    queryKey: ["backend_processing",id],
    queryFn: () => apiFunctions.getSingleBackendProcessing(id),
  });
};

export const useFinalLoan = (id)=>{
   const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (params) => apiFunctions.updateFinalLoan(id,params),
      onSuccess: () => {
        toast.success("Final Loan Updated");
        queryClient.invalidateQueries(["backend_processing", id]);
      },
      onError: (err) => {
        const res = formatBackendErrors(err);
        toast.error(res);
      },
    });
}

export const useUpdateStatus = (id)=>{
   const queryClient = useQueryClient();
   return useMutation({
     mutationFn: (params) => apiFunctions.backendProcessingStatus(id, params),
     onSuccess: () => {
       toast.success("Status changed successfully");
       queryClient.invalidateQueries(["backend_processing", id]);
     },
     onError: (err) => {
       const res = formatBackendErrors(err);
       toast.error(res);
     },
   });
}