import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import InputFloating from "../InputFloating";
import { useResetPassword } from "@/hooks/useUsers";
import Spinner from "@/components/Spinner";
function ResetPassword({ isOpen, onClose, user }) {
  const [pin, setPin] = useState("");
  const { mutate: resetPassword, isPending } = useResetPassword();
  const inputBox = useRef();
  useEffect(() => {
    if (!isOpen) return;
    setPin("");
    const handleClick = (e) => {
      if (inputBox.current && !inputBox.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAdd = () => {
    resetPassword(user.id, {
      onSuccess: (params) => {
        setPin(params?.access_code || "");
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div
        ref={inputBox}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 absolute top-5"
      >
        {/* Modal header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Reset Password</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
          className="flex gap-4 flex-col justify-start"
          noValidate
        >
          {pin ? (
            <div>Your new pin is {pin}</div>
          ) : (
            <div className="flex-1">
              {/* <label htmlFor="orgName" className="block text-sm font-medium mb-1">
              OrgName <span className="text-red-600">*</span>
            </label> */}
              <InputFloating
                type="text"
                value={user?.mobile_number}
                className="w-44  rounded focus:outline-none "
                disabled
              />
            </div>
          )}
          {!pin && (
            <div>
              <Button label={isPending ? <Spinner /> : "Reset Password"} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
