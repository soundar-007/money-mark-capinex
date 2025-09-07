import React from "react";

function Loader() {
  return (
   <div className="flex items-center justify-center h-full">
  <div className="w-10 h-10 border-4  border-gray-400 rounded-full animate-spin duration-75 transition-all" style={{borderTopColor:'black'}}></div>
</div>

  );
}

export default Loader;
