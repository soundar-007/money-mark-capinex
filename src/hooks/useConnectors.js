import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFunctions } from "../lib/apiFunctions";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";


export const useConnectors = () => {
  return useQuery({
    queryKey: ["all_connectors"],
    queryFn: () => apiFunctions.getAllConnector(),
  });
};


export const useCreateConnector = ()=>{ 
  const queryClient = useQueryClient();
 return useMutation({
    mutationFn:(params)=>apiFunctions.createConnector(params), 
    onSuccess:()=>{ 
      toast.success('Added Successfully')
      queryClient.invalidateQueries("all_connectors")
    },
    onError:(err)=>{
      console.log(err) 
     toast.error('')
    }
 })
}