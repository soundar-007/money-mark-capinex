import CardList from "@/components/mywork/backend-processing/CardList";
import StatusColumnList from "@/components/mywork/backend-processing/StatusColumnList";
import TableList from "@/components/mywork/backend-processing/TableList";

export default function BackendProcessing() {
  const statusColors = {
    Documentation: "#81592f",
    Filled: "#6b3627",
    Pending: "#a47d2b",
    Approved: "#2f6036",
    Disbursed: "#13161e",
  };



  return (
    <div className="flex flex-col">
      {/* <div className="overflow-x-auto w-full py-4 px-2 custom-scrollbar">
        <CardList cards={dummyData} />
      </div> */}
      <div className="self-end">
        <i className="pi pi-list text-lg top- right-0 p-2 cursor-pointer"></i>
      </div>
      <div className="gap-4 w-full px-4">
        {/* <StatusColumnList statusColors={statusColors} data={data} /> */}
        <TableList />
      </div>
    </div>
  );
}
