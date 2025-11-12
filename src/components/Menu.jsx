const MENU_ITEMS = [
  "Reset Password",
  "Dialer Info",
  "Update Profile Image",
  "Update Background Image",
  "Tenancy",
  "Aggregator",
];

export default function Menu({ user, showMenu, logout, setShowMenu }) {
  if (!showMenu) return null;

  return (
    <div className="absolute right-5 mt-2 w-52 bg-white rounded-md shadow-lg py-1 px-2 z-50 border">
      <div className="px-4 py-2 text-sm text-gray-700 border-b">
        <p className="font-medium">
          {user?.display_name || user?.email || "User"}
        </p>
        <p className="text-gray-500 text-xs">{user?.role_name || "Member"}</p>
      </div>

      {MENU_ITEMS.map((label) => (
        <div
          key={label}
          className="block w-full text-left px-4 py-2 text-xs text-gray-800 hover:bg-gray-100 cursor-pointer"
        >
          {label}
        </div>
      ))}

      <button
        onClick={() => {
          logout();
          setShowMenu(false);
        }}
        className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 border-t"
      >
        <i className="bx bx-log-out mr-2"></i>
        Logout
      </button>
    </div>
  );
}
