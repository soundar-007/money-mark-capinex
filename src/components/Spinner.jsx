import React from "react";

function Spinner({className}) {
  return (
   <div className="flex items-center justify-center h-full">
  <div className={`w-5 h-5 border-b-2 border-gray-200 rounded-full animate-spin duration-75 transition-all ${className}`} style={{borderTopColor:'black'}}></div>
</div>

  );
}

export default Spinner;
