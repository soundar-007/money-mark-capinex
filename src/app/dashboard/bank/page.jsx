'use client'
import Loader from '@/components/Loader';
import { useBanks, useBankStatus } from '@/hooks/useBanks';
import { useEffect, useState } from 'react';

export default  function BanksPage() {
    const {data,isLoading} = useBanks();  
    const {mutate:updateBankStatus} = useBankStatus();
  const [bankData, setBankData] = useState(
  );
   
  useEffect(()=>{
   setBankData(data)
   },[data])

  const handleToggle = async (bank) => {
    setBankData(prev =>
      prev.map(bankEl =>
        bankEl.id === bank.id
        ? { ...bankEl, is_active: !bankEl.is_active }
        : bankEl
      )
    );
    updateBankStatus({...bank,is_active:!bank.is_active})
  };

  if(isLoading) return <Loader/>
  return (
    <div className="p-4 h-full sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 max-w-7xl mx-auto ">
     {bankData?.map((bank) => (
          <div
            key={bank.id}
            className={`bg-white border-2 ${
              !bank.is_active  ? "border-red-350" : "border-green-350"
            } rounded-lg p-4 flex flex-col items-center justify-between gap-3  transition duration-300 transform hover:-translate-y-1 hover:shadow-lg `}
          >
            <div className="flex items-center gap-2 text-lg font-bold ">
              <i className="bx bxs-bank text-2xl"></i>
              <span>{bank.name}</span>
            </div>
            <button
              onClick={() => handleToggle(bank)}
              className={`flex items-center gap-2 px-6 py-1 rounded-3xl text-sm font-semibold  transition-colors duration-200 outline-none ${
                !bank.is_active 
                  ? "bg-gray-200  text-black-150 hover:bg-gray-300"
                  : "bg-green-250  text-green-350 font-semibold"
              }`}
            >
              <i
                className={`bx bxs-toggle-${
                  bank.is_active  ? "left" : "right"
                } text-lg `}
              ></i>{" "}
              {!bank.is_active ? 'Enable' : 'Disable'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
