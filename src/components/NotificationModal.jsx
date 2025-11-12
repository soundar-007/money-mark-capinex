import { useState } from "react";

const NotificationModal = ({onClose,isOpen}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: "2025-09-08",
      time: "10:19:06",
      message: "New chat message from customer, Workflow",
    },
    {
      id: 2,
      date: "2025-09-08",
      time: "10:19:14",
      message: "New chat message from customer, Workflow",
    },
    {
      id: 3,
      date: "2025-09-08",
      time: "10:18:53",
      message: "New chat message from customer, Workflow",
    },
    {
      id: 4,
      date: "2025-09-08",
      time: "10:18:58",
      message: "New chat message from customer, Workflow",
    },
    {
      id: 5,
      date: "2025-08-12",
      time: "06:50:07",
      message: "New chat message from customer, capinex test",
    },
    {
      id: 6,
      date: "2025-08-12",
      time: "06:49:36",
      message: "New chat message from customer, capinex test",
    },
    {
      id: 7,
      date: "2025-08-12",
      time: "06:48:49",
      message: "Chat status updated to sent",
    },
    {
      id: 8,
      date: "2025-08-12",
      time: "06:48:49",
      message: "Chat status updated to delivered",
    },
    {
      id: 9,
      date: "2025-08-12",
      time: "06:48:49",
      message: "Chat status updated to delivered",
    },
    {
      id: 10,
      date: "2025-08-12",
      time: "06:48:50",
      message: "Chat status updated to delivered",
    },
    {
      id: 11,
      date: "2025-08-12",
      time: "06:48:56",
      message: "Chat status updated to failed",
    },
    {
      id: 12,
      date: "2025-08-11",
      time: "11:34:34",
      message: "New chat message from customer, vikas MATHAPATI",
    },
    {
      id: 13,
      date: "2025-08-11",
      time: "11:27:56",
      message: "New chat message from customer, vikas MATHAPATI",
    },
    {
      id: 14,
      date: "2025-08-11",
      time: "11:25:31",
      message: "New chat message from customer, vikas MATHAPATI",
    },
    {
      id: 15,
      date: "2025-08-11",
      time: "08:08:17",
      message: "Chat status updated to read",
    },
    {
      id: 16,
      date: "2025-08-10",
      time: "15:32:13",
      message: "Chat status updated to failed",
    },
    {
      id: 17,
      date: "2025-08-10",
      time: "15:31:53",
      message: "Chat status updated to sent",
    },
    {
      id: 18,
      date: "2025-08-10",
      time: "15:31:53",
      message: "Chat status updated to delivered",
    },
    {
      id: 19,
      date: "2025-08-01",
      time: "17:13:28",
      message: "Chat status updated to read",
    },
    {
      id: 20,
      date: "2025-08-01",
      time: "17:13:48",
      message: "New chat message from customer, Yalavarti Gokul",
    },
    {
      id: 21,
      date: "2025-08-01",
      time: "16:24:08",
      message: "Chat status updated to read",
    },
    {
      id: 22,
      date: "2025-08-01",
      time: "16:19:43",
      message: "Chat status updated to sent",
    },
    {
      id: 23,
      date: "2025-08-01",
      time: "16:19:43",
      message: "Chat status updated to read",
    },
    {
      id: 24,
      date: "2025-08-01",
      time: "16:18:31",
      message: "Chat status updated to sent",
    },
    {
      id: 25,
      date: "2025-08-01",
      time: "16:18:31",
      message: "Chat status updated to read",
    },
    {
      id: 26,
      date: "2025-03-04",
      time: "06:58:20",
      message: "Chat status updated to read",
    },
    {
      id: 27,
      date: "2025-03-04",
      time: "06:57:20",
      message: "Chat status updated to sent",
    },
    {
      id: 28,
      date: "2025-03-04",
      time: "06:57:22",
      message: "Chat status updated to delivered",
    },
    {
      id: 29,
      date: "2025-03-04",
      time: "06:57:50",
      message: "New chat message from customer, Demo1",
    },
  ]);

  // const [isOpen, setIsOpen] = useState(true);

  const handleClear = () => {
    setNotifications([]);
  };

  const handleClose = () => {
    onClose()
  };

  const handleNotificationClick = (id) => {
    console.log("Notification clicked:", id);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl  p-8 absolute top-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Notification
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleClear}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div
          className="px-6 py-4 overflow-y-auto"
          style={{ maxHeight: "70vh" }}
        >
          {notifications.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No notifications
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification.id)}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                >
                  {/* Date and Time */}
                  <div className="flex flex-col min-w-[120px]">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {notification.date}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {notification.time}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex-1 flex items-center justify-between">
                    <div className="text-sm text-gray-800 dark:text-gray-200">
                      {notification.message}
                    </div>
                    <div className="ml-4">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;