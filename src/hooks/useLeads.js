import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { formatBackendErrors } from "@/lib/formatBackendErrors";

export const useLeads = () => {
  return useQuery({
    queryKey: ["leads_all"],
    queryFn: () => apiFunctions.getLeads(),
  });
};

export const createCustomerLeads = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.createLeadCustomer(params),
    onSuccess: () => {
      toast.success("Added Successfully");
      queryClient.invalidateQueries("leads_all");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const updateLead = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.updateLead(leadId, params),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const getLeadDetails = (leadId) => {
  return useQuery({
    queryKey: ["lead", leadId],
    queryFn: () => apiFunctions.getLeadsDetails(leadId),
  });
};
// export const updateLeads = (leadId)=>{
//  const queryClient = useQueryClient();
//  return useMutation({
//    mutationFn: (params) => apiFunctions.updateLead(params),
//    onSuccess: () => {
//      toast.success("Added Successfully");
//      queryClient.invalidateQueries("leads_all");
//    },
//    onError: (err) => {
//      const res = formatBackendErrors(err);
//      toast.error(res);
//    },
//  });
// }
