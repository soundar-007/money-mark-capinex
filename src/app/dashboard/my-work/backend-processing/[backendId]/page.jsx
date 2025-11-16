'use client'
import CustomEditor from "@/components/dashboardComponents/ColdCalling/Editor";
import Notes from "@/components/Leads/Notes";
import BorrowerDetailsCard from "@/components/mywork/backend-processing/backend-details/BorrowerDetailsCard";
import LeadInfoCard from "@/components/mywork/backend-processing/backend-details/LeadInfoCard";
import LeadTimeCard from "@/components/mywork/backend-processing/backend-details/LeadTimeCard";
import Spinner from "@/components/Spinner";
import { useSingleBackend } from "@/hooks/useBackendProcess";
import {useParams} from "next/navigation";
function BackendIdPage() {
 const params = useParams()
  const {data,isLoading} = useSingleBackend(params.backendId)
    if (isLoading){
      return <Spinner className={"w-20 h-20 border-t-5 border-2"} />;
    }
  // const borrower = {};
  const notes = [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 min-h-screen">
      <div className="flex flex-col gap-6 col-span-2">
        <BorrowerDetailsCard borrower={data} />
        <div className="shadow-md p-4 rounded-lg bg-white flex flex-col gap-4 min-h-[300px]">
          <CustomEditor />
          <Notes notes={notes} />
        </div>
      </div>

      <div className="col-span-1 flex flex-col">
        <LeadInfoCard
          leadStatus={data?.lead_status}
          backendStatus={data?.lead_backend_status}
          productInfo={data?.product_info}
          leadOwner={data?.lead_owner}
        />
      </div>

      <div className="col-span-1 flex flex-col">
        <LeadTimeCard leadTime={data?.lead_time_info} />
      </div>
    </div>
  );
}

export default BackendIdPage;
