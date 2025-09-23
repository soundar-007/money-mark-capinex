"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeleteUser, useMakeActive } from "@/hooks/useUsers";
import Spinner from "../Spinner";
import ResetPassword from "./ResetPassword";

const DropdownMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyles, setMenuStyles] = useState({});
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();
  const { mutate: deleteUser, isPending } = useDeleteUser();
  const { mutate: makeStatusChange, isPending: activeLoading } = useMakeActive();
  const [showAddButton, setShowAddButton] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMenuClick = (action) => {
    if (typeof action === "function") action();
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
      onClick={(e) => e.stopPropagation()}
    >
      <div className="py-1">
        <div
          onClick={() =>
            handleMenuClick(() => router.push(`/dashboard/users/${user.id}`))
          }
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Edit
        </div>
        <div
          onClick={() =>
            handleMenuClick(() =>
              makeStatusChange({ ...user, is_active: !user.is_active })
            )
          }
          className="px-4 py-2 cursor-pointer capitalize hover:bg-gray-100"
        >
          Make {user.is_active ? "Inactive" : "active"}
        </div>
        <div
          onClick={() => handleMenuClick(() => {})}
          className="px-4 py-2 cursor-pointer capitalize hover:bg-gray-100"
        >
          Transfer
        </div>
        <div
          onClick={() => handleMenuClick(() => setShowAddButton(true))}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Reset Password
        </div>
        <ResetPassword
          user={user}
          isOpen={showAddButton}
          onClose={() => setShowAddButton(false)}
        />
        <div className="border-t my-1"></div>
        <div
          onClick={() => handleMenuClick(() => deleteUser(user.id))}
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
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <MoreVertical className="w-6 h-6" />
      </button>
      {isOpen && createPortal(dropdownMenu, document.body)}
    </>
  );
};

export default DropdownMenu;
