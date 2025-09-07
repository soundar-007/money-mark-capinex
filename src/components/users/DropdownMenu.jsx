"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeleteUser } from "@/hooks/useUsers";
import Spinner from "../Spinner";

const DropdownMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyles, setMenuStyles] = useState({});
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();
  const { mutate: deleteUser, isPending } = useDeleteUser();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleDelete = (userId) => {
    deleteUser(userId);
  };
  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuStyles({
        position: "absolute",
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX - 150,
        zIndex: 1000,
        width: "200px",
      });
      setIsOpen(true);
    }
  };

  const dropdownMenu = (
    <div
      ref={menuRef}
      className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
      style={menuStyles}
    >
      <div className="py-1">
        <div
          onClick={() => router.push(`/dashboard/users/${user.id}`)}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Edit
        </div>
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">
          Make Inactive
        </div>
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">
          Transfer
        </div>
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">
          Reset Password
        </div>
        <div className="border-t my-1"></div>
        <div
          onClick={() => handleDelete(user.id)}
          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-red-600 hover:text-white text-red-600"
        >
          {isPending ? "Deleting.." : "Delete"}
          {isPending && <Spinner />}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <MoreVertical className="w-6 h-6" />
      </button>
      {isOpen && createPortal(dropdownMenu, document.body)}
    </>
  );
};

export default DropdownMenu;
