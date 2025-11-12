"use client";
import { createCustomerLeads } from "@/hooks/useLeads";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useState} from "react";

function CustomerPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const createLeadMutation = createCustomerLeads();

   const handleCreateAndNavigate = () => {
     if (!phoneNumber) {
       toast.error("Please enter a phone number");
       return;
     }

     const phoneRegex = /^\d{10}$/;
     const isValid = phoneRegex.test(phoneNumber);

     if (!isValid) {
       toast.error("Please enter a valid 10-digit phone number");
       return;
     }

     createLeadMutation.mutate(
       { phone_number: phoneNumber },
       {
         onSuccess: (data) => {
           router.push(`/dashboard/my-work/leads/${data.id || data.leadId}`);
         },
       }
     );
   };

  return (
    <div className="mt-10">
      <div className="flex relative">
        <div className="flex items-center">
          <Image
            width={20}
            height={20}
            className="absolute left-2  cursor-pointer"
            src={"/assets/search-icon.png"}
            alt="icon"
          />
        </div>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="pl-10 pr-4 py-2 border-1 rounded-l-lg"
          type="text"
        />
        <button
          onClick={handleCreateAndNavigate}
          className="bg-primary text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-primary-dark transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
