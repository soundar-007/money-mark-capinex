import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { formatBackendErrors } from "@/lib/formatBackendErrors";


export const useBankContacts = () => {
  return useQuery({
    queryKey: ["bank_contact"],
    queryFn: () => apiFunctions.getBankContacts(),
  });
};


export const useCreateBankContact = ()=>{ 
  const queryClient = useQueryClient();
 return useMutation({
    mutationFn:(params)=>apiFunctions.createBankContacts(params), 
    onSuccess:()=>{ 
      toast.success('Bank Contact Added Successfully')
      queryClient.invalidateQueries("bank_contact")
    },
    onError:(err)=>{
      const errorMessage = formatBackendErrors(err);
      toast.error(errorMessage);
    }
 })
}
export const useDeleteBankContact = ()=>{ 
  const queryClient = useQueryClient();
 return useMutation({
    mutationFn:(params)=>apiFunctions.deleteBankContact(params), 
    onSuccess:()=>{ 
      toast.success('Bank Contact Added Successfully')
      queryClient.invalidateQueries("bank_contact")
    },
    onError:(err)=>{
       const errorMessage = formatBackendErrors(err);
      toast.error(errorMessage);
    }
 })
}