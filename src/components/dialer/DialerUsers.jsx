import {
  useAssignQueue,
  useDialers,
  useDialersQueue,
} from "@/hooks/useDialers";
import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import Button from "../Button";
import { toast } from "react-hot-toast";
import { useUpdateUser } from "@/hooks/useUsers";

function DialerUsers() {
  const { data: tableData, isLoading } = useDialers();
  const { data: queueData } = useDialersQueue();
  const [users, setUsers] = useState(() => tableData || []);
  const { mutate: assignQueue } = useAssignQueue();
  const { mutate: updateUser } = useUpdateUser();
  const queueOptions = queueData?.map((el) => {
    return { name: el.name, value: el.id };
  });
  useEffect(() => {
    setUsers(tableData || []);
  }, [tableData]);

  if (isLoading) {
    return <Loader />;
  }
  const handleQueueChange = (userId, value) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, queue: value } : user
      )
    );
  };

  const assignQueueForUser = (user) => {
    if (user?.queue_name) {
      toast.error("Queue already Assigned");
      return;
    }
    if (!user.queue) {
      toast.error("Please Select Queue and Assign ");
      return;
    }
    const params = {
      dialer_queue_id: user.queue,
      user_id: user.id,
    };
    assignQueue(params);
  };

  const handleUpdateUser = (user) => {
    updateUser(user);
  };

  const handleInputChange = (userId, field, value) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, [field]: value } : user
      )
    );
  };

  const handleDelete = (User) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === User.id
          ? { ...user, extension: null, secret_code: null }
          : user
      )
    );
    updateUser({ ...User, extension: null, secret_code: null });
  };

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b-2 border-primary">
            <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
              ID
            </th>
            <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
              User Name
            </th>
            <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
              Display Name
            </th>
            <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
              Extension
            </th>
            <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
              Queue
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr
              key={user.id}
              className={`border-b border-gray-300 ${
                index % 2 !== 0 ? "bg-gray-200" : ""
              }`}
            >
              <td className="py-4 whitespace-nowrap px-4">{user.id}</td>
              <td className="py-4 whitespace-nowrap px-4">
                {user.mobile_number}
              </td>
              <td className="py-4 whitespace-nowrap px-4">
                {user.display_name}
              </td>
              <td className="py-4 whitespace-nowrap px-4 w-full">
                <div className="flex  gap-2  w-full">
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange(user.id, "extension", e.target.value)
                    }
                    className="text-left p-2 text-gray-600 border border-gray-300 rounded-lg bg-white w-52 focus:outline-none"
                    value={user.extension || ""}
                    placeholder="Extension"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange(user.id, "secret_code", e.target.value)
                    }
                    className="text-left p-2 text-gray-600 border border-gray-300 rounded-lg bg-white w-32 focus:outline-none"
                    value={user.secret_code || ""}
                    placeholder="Secret"
                  />
                  <div className="flex gap-5">
                    <Button
                      onClick={() => handleUpdateUser(user)}
                      label={"Add"}
                    />
                    <Button onClick={() => handleDelete(user)} label="Delete" />
                  </div>
                </div>
              </td>
              <td className="py-4 f whitespace-nowrap px-4 w-full">
                <div className="flex  gap-4 w-full">
                  {!user.queue_name ? (
                    <select
                      key={user.id}
                      value={user.queue || ""}
                      onChange={(e) =>
                        handleQueueChange(user.id, e.target.value)
                      }
                      className="rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400 text-gray-600"
                    >
                      <option value="" disabled hidden>
                        Select queue
                      </option>
                      {queueOptions?.map((queue) => (
                        <option key={queue.value} value={queue.value}>
                          {queue.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="text-left p-2 text-gray-600 border border-gray-300 rounded-lg bg-white w-full focus:outline-none py-3 px-4"
                      value={user?.queue_name || ""}
                      readOnly
                      placeholder="Secret"
                    />
                  )}

                  <div className="flex gap-5">
                    {/* <button
                      disabled={user.queue_name}
                      onClick={() => assignQueueForUser(user)}
                      className="bg-primary text-white rounded px-4 py-2 font-semibold"
                    >
                      Assign
                    </button> */}
                    <Button
                      label={"Assign"}
                      // disabled={user?.queue_name}
                      onClick={() => assignQueueForUser(user)}
                      className={`${
                        user?.queue_name
                          ? "bg-gray-500 font-light"
                          : "text-yellow-50"
                      }`}
                    />
                    <Button label={"Delete"} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DialerUsers;
