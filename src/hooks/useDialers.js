import { apiFunctions } from "@/lib/apiFunctions";
import { formatBackendErrors } from "@/lib/formatBackendErrors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useDialers = () => {
  return useQuery({
    queryKey: ["dialer_users"],
    queryFn: () => apiFunctions.getDialerUsers(),
  });
};

export const useDialersQueue = () => {
  return useQuery({
    queryKey: ["dialer_queue"],
    queryFn: () => apiFunctions.getDialerQueue(),
  });
};

export const useDialersGateway = () => {
  return useQuery({
    queryKey: ["dialer_gateway"],
    queryFn: () => apiFunctions.getDialerGateway(),
  });
};

export const useDialersList = () => {
  return useQuery({
    queryKey: ["dialers"],
    queryFn: () => apiFunctions.getDialers(),
  });
};

export const useCreateDialerQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => {
      return apiFunctions.addDialerQueue(params);
    },
    onSuccess: () => {
      toast.success("Added Queue Successfully");
      queryClient.invalidateQueries("dialer_queue");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useCreateDialerGateway = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => {
      return apiFunctions.addDialerGateway(params);
    },
    onSuccess: () => {
      toast.success("Added Gateway Successfully");
      queryClient.invalidateQueries("dialer_gateway");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useDefaultGatewayDialer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => apiFunctions.defaultDialerGateway(params),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClient.invalidateQueries("dialer_gateway");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useUpdateDialerQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => {
      return apiFunctions.updateDialerQueue(params);
    },
    onSuccess: () => {
      toast.success("Queue Updated Successfully");
      queryClient.invalidateQueries("dialer_queue");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useDeleteDialerGateway = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => {
      return apiFunctions.deleteDialerGateway(params);
    },
    onSuccess: () => {
      toast.success("Gateway Deleted Successfully");
      queryClient.invalidateQueries("dialer_gateway");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

export const useAssignQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params) => {
      return apiFunctions.assignQueue(params);
    },
    onSuccess: () => {
      toast.success("Queue Assigned Successfully");
      queryClient.invalidateQueries("dialer_users");
    },
    onError: (err) => {
      const res = formatBackendErrors(err);
      toast.error(res);
    },
  });
};

// export const useCreateBank = ()=>{
//   const queryClient = useQueryClient();
//  return useMutation({
//     mutationFn:(params)=>apiFunctions.createConnector(params),
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
