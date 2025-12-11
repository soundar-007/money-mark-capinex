import { maskPhoneNumber } from "@/lib/masking";

const LeadInfoCard = ({
  leadStatus,
  backendStatus,
  productInfo,
  leadOwner,
}) => {
  return (
    <div className="bg-white p-4 rounded  space-y-4">
      {/* Two columns: Lead Status & Backend Status */}
      <div className="flex w-full gap-4 pb-2 border-b border-gray-200">
        <div className="w-1/2">
          <div className="font-semibold text-gray-700 text-sm">Lead Status</div>
          <div className="status-data mt-1">
            <span className="lead-status text-blue-600 font-bold">
              {leadStatus}
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="font-semibold text-gray-700 text-sm">
            Backend Status
          </div>
          <div className="status-data mt-1">
            <span className="backend text-green-700 font-bold">
              {backendStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Product Info Block */}
      <div className="bg-gray-100 rounded p-3 border-b border-gray-200 mb-2">
        <div className="font-semibold text-gray-700 mb-2">Product Info</div>
        <div className="grid grid-cols-6 items-center mb-1">
          <span className="col-span-2 font-semibold">Bank:</span>
          <span className="col-span-4 flex items-center">
            {productInfo?.selected_bank}
            {/* {productInfo.appUrlIcon && (
              // <img
              //   src={productInfo.appUrlIcon}
              //   alt="App Url"
              //   title="App Url"
              //   className="ml-2"
              //   style={{ width: "18px", cursor: "pointer" }}
              // />
            )} */}
          </span>
        </div>
        <div className="grid grid-cols-6 items-center mb-1">
          <span className="col-span-2 font-semibold">Product:</span>
          <span className="col-span-4">{productInfo?.product_display}</span>
        </div>
        <div className="grid grid-cols-6 items-center mb-1">
          <span className="col-span-2 font-semibold">Corporate:</span>
          <span className="col-span-4">{productInfo?.selected_scheme}</span>
        </div>
        <div className="grid grid-cols-6 items-center">
          <span className="col-span-2 font-semibold">Category:</span>
          <span className="col-span-4">{productInfo?.category}</span>
        </div>
      </div>

      {/* Lead Owner Block */}
      <div className="bg-gray-100 rounded p-3">
        <div className="flex items-center mb-2">
          <span className="font-semibold text-gray-700">Lead Owner</span>
          {/* <img
            src="assets/img/icons/arrow_drop_down.png"
            alt="dropdown arrow"
            className="ml-auto"
            style={{ width: "18px" }}
          /> */}
        </div>
        <div className="grid grid-cols-6 items-center mb-1">
          <span className="col-span-2 font-semibold">Lead Owner:</span>
          <span className="col-span-4">{leadOwner?.name}</span>
        </div>
        <div className="grid grid-cols-6 items-center">
          <span className="col-span-2 font-semibold">Mobile:</span>
          <span className="col-span-4">{maskPhoneNumber(leadOwner?.mobile)}</span>
        </div>
      </div>
    </div>
  );
};

export default LeadInfoCard;
