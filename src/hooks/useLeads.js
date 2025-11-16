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

export const useCommercials = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.commercials(params, leadId),
    onSuccess: () => {
      // toast.success("");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
export const useSelectLoan = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.selectLoan(params, leadId),
    onSuccess: () => {
      toast.success("Selected Successfully");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
export const useWithdraw = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFunctions.withdraw(leadId),
    onSuccess: () => {
      toast.success("Withdraw Successfully Done");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};
export const useSubmit = (leadId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFunctions.submitToBank(leadId),
    onSuccess: () => {
      toast.success("Submited to bank successfully");
      queryClient.invalidateQueries(["lead", leadId]);
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
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
