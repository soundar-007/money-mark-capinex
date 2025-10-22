import React from 'react'
import Button from '../Button';


function FollowUpModal({isOpen,onClose}) {
   if (!isOpen) return null;

   const handleAdd = () => {};

   return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
       <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 absolute top-5">
         {/* Modal header */}
         <div className="flex justify-between items-center border-b pb-2 mb-4">
           <h4 className="text-md font-medium">Followup</h4>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
             aria-label="Close modal"
           >
             ×
           </button>
         </div>
         
         {/* here need a desing   */}
           <div className="grid grid-cols-2 gap-4 items-center">
          {/* Note Textarea */}
          <div className="col-span-3 md:col-span-2">
            <textarea
              placeholder="Note"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>
          {/* Date Input */}
          <div>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          {/* Time Input */}
          <div>
            <input
              type="time"
              step={300}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
        {/* Create Button */}
        <div className="flex justify-end mt-4">
        <Button label={'Create'}/>
        </div>
       </div>
     </div>
   );
}

export default FollowUpModal