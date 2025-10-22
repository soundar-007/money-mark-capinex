import React from 'react'
import Button from '../Button';

function ConnectorModal() {
   if (!isOpen) return null;

   const handleAdd = () => {};

   return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
       <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 absolute top-5">
         {/* Modal header */}
         <div className="flex justify-between items-center border-b pb-2 mb-4">
           <h4 className="text-md font-medium">Call Spy</h4>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
             aria-label="Close modal"
           >
             ×
           </button>
         </div>

         <div className="flex items-center gap-2">
           <div>
             <Button label="Listen" style={{ backgroundColor: "#c8d940" }} />
           </div>
           <div>
             <Button label="Whisper" style={{ backgroundColor: "#cf71d1" }} />
           </div>
           <div>
             <Button label="Barge" style={{ backgroundColor: "#8e8ec5" }} />
           </div>
         </div>
       </div>
     </div>
   );
}

export default ConnectorModal