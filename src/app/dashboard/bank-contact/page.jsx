"use client";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
import Loader from "@/components/Loader";
import { useBanks } from "@/hooks/useBanks";
import React, { useState } from "react";
import { useBankContacts, useCreateBankContact, useDeleteBankContact } from "@/hooks/useBankContacts";
import { Trash2 } from 'lucide-react';
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";

export default function BankContact() {
  const [selectedBank, setSelectedBank] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [deletingId,setDeletingId] = useState([])

  const { data: banks } = useBanks();
  const { data: bankContact, isLoading } = useBankContacts();
  const { mutate: deleteBankContact} = useDeleteBankContact();
  const { mutate: createBankContact, isPending:isCreating } = useCreateBankContact();

  const handleDelete = (id) => {
    if(deletingId.includes(id)) return
  setDeletingId((prev) => [...prev, id]);
  deleteBankContact(id, {
    onSuccess: () => {
      setDeletingId((prev) => prev.filter((el) => el !== id));
    },
    onError: () => {
      setDeletingId((prev) => prev.filter((el) => el !== id));
    },
  });
};
  const handleCreateBankContact = () => {
    if (!selectedBank || !name || !mobile || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    createBankContact({
      bank: banks.find((el)=>selectedBank.toLowerCase() == el.name.toLowerCase()).id.toString(),
      name,
      mobile_number: mobile,
      email,
      designation,
    },{onSuccess :()=>{
      setName("");
      setMobile("");
      setEmail("");
      setDesignation("");
    }});
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-full p-7">
      <div>
        <CustomDropdown
          label={"Select Bank *"}
          options={banks}
          value={selectedBank}
          onChange={setSelectedBank}
          className="w-full sm:w-1/4"
        />
      </div>
      <div className="mt-5 flex gap-4 flex-wrap md:flex-nowrap">
        <InputFloating
          label={"Name *"}
          value={name}
          onChange={(value) => setName(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Mobile *"}
          value={mobile}
          onChange={(value) => setMobile(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Email *"}
          value={email}
          onChange={(value) => setEmail(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Designation"}
          value={designation}
          onChange={(value) => setDesignation(value)}
          className="w-full sm:w-1/4"
        />
        <div>
          <button
            className="bg-primary text-white rounded px-4 py-2 font-semibold"
            onClick={handleCreateBankContact}
            disabled={isCreating}
           
          >
            {isCreating ? <Spinner/> : 'Submit'}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Mobile</th>
              <th className="px-2 py-2">Email</th>
              <th className="px-2 py-2">Designation</th>
              <th className="px-2 py-2"></th>
            </tr>
            <tr>
              <td colSpan={6}>
                <div className="border-b border-1 border-black w-full" />
              </td>
            </tr>
          </thead>
          <tbody className="">
            {bankContact?.map((item, index) => (
              <tr
                className={`text-gray-800 ${
                  index % 2 !== 0 ? "bg-gray-200" : ""
                } `}
                key={index}
              >
                <td className="px-2 py-1 font-semibold">{index + 1}</td>
                <td className="px-2 py-3 uppercase font-semibold">
                  {item.name}
                </td>
                <td className="px-2 py-1 font-semibold ">{item.mobile_number}</td>
                <td className="px-2 py-1 font-semibold ">{item.email}</td>
                <td className="px-2 py-1 font-semibold ">{item.designation}</td>
                <td
                  className="px-2 py-1 font-semibold cursor-pointer text-red-500  flex items-center justify-center"
                  onClick={() => handleDelete(item.id)}
                  disabled={deletingId.includes(item.id)}
                >
                   {deletingId.includes(item.id) ? <Spinner className="border-red-600 h-6 w-6 " /> : <Trash2 className="h-10" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}