import { apiFunctions } from "@/lib/apiFunctions";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useOrganizations = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: () => apiFunctions.getOrganizations(),
  });
};
