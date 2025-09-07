import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";


export const useBanks = () => {
  return useQuery({
    queryKey: ["banks"],
    queryFn: () => apiFunctions.getBanks(),
  });
};


export const useCreateBank = ()=>{ 
  const queryClient = useQueryClient();
 return useMutation({
    mutationFn:(params)=>apiFunctions.createConnector(params), 
    onSuccess:()=>{ 
      toast.success('Added Successfully')
      queryClient.invalidateQueries("banks")
    },
    onError:(err)=>{
      console.log(err) 
     toast.error('')
    }
 })
}

// export const useUpdateBank = ()=>{ 
//   const queryClient = useQueryClient();
//  return useMutation({
//     mutationFn:(params)=>apiFunctions.updateBankContact(params), 
//     onSuccess:()=>{ 
//       toast.success('Added Successfully')
//       queryClient.invalidateQueries("banks")
//     },
//     onError:(err)=>{
//       console.log(err) 
//      toast.error('')
//     }
//  })
// }

export const useBankStatus = ()=>{ 
  const queryClient = useQueryClient();
 return useMutation({
    mutationFn:(params)=>apiFunctions.updateBankStatus(params), 
    onSuccess:()=>{ 
      toast.success('Updated Successfully')
      queryClient.invalidateQueries("banks")
    },
    onError:(err)=>{
      console.log(err) 
     toast.error('')
    }
 })
}