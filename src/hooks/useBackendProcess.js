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
