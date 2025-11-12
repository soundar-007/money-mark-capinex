import CustomEditor from "@/components/dashboardComponents/ColdCalling/Editor";
import Notes from "@/components/Leads/Notes";
import BorrowerDetailsCard from "@/components/mywork/backend-processing/backend-details/BorrowerDetailsCard";
import LeadInfoCard from "@/components/mywork/backend-processing/backend-details/LeadInfoCard";
import LeadTimeCard from "@/components/mywork/backend-processing/backend-details/LeadTimeCard";

function BackendIdPage() {
  const borrower = {};
  const notes = [];
  const leadStatus = "BankDiscussion";
  const backendStatus = "Documentation";
  const productInfo = {};
  const leadOwner = {};
  const leadTime = {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 min-h-screen">
      <div className="flex flex-col gap-6 col-span-2">
        <BorrowerDetailsCard borrower={borrower} />
        <div className="shadow-md p-4 rounded-lg bg-white flex flex-col gap-4 min-h-[300px]">
          <CustomEditor />
          <Notes notes={notes} />
        </div>
      </div>

      <div className="col-span-1 flex flex-col">
        <LeadInfoCard
          leadStatus={leadStatus}
          backendStatus={backendStatus}
          productInfo={productInfo}
          leadOwner={leadOwner}
        />
      </div>

      <div className="col-span-1 flex flex-col">
        <LeadTimeCard leadTime={leadTime} />
      </div>
    </div>
  );
}

export default BackendIdPage;
