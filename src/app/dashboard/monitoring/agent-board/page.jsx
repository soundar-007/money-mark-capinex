'use client'
import React, { useState } from "react";
import Image from "next/image";
import PopUp from "@/components/monitoring/agentBoard/PopUp";


export default function AgentBoard() {
  const [activePopup, setActivePopup] = useState(null);

  const handleTogglePopup = (id) => {
    setActivePopup(activePopup === id ? null : id);
  };

  const agents = [
    {
      id: 1,
      team: "TELGU",
      name: "Srinivas K",
      status: "DeadCall",
      duration: "3h 22m 39s",
      bg: "bg-gray-600",
    },
    {
      id: 2,
      team: "CPINEX",
      name: "Bhoomika",
      status: "Paused",
      duration: "2h 35m 10s",
      bg: "bg-yellow-200",
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-end mb-5">
        <a href="#" className="ml-2 text-blue-500">
          Org View
        </a>
        <a href="#" className="ml-2 text-blue-500">
          Full Screen
        </a>
      </div>

      {agents.map((agent) => (
        <div key={agent.id}>
          <h1 className="font-bold text-gray-600 mb-4 text-lg">{agent.team}</h1>
          <div
            className={`w-80 border-2 rounded p-4 mb-10 ${agent.bg} border-red-600 relative`}
          >
            <div className="flex">
              <div className="w-13 h-13 bg-white mr-4 flex justify-center items-center">
                <Image
                  src="/assets/manavatar.jpg"
                  width={80}
                  height={80}
                  alt="Profile"
                />
              </div>
              <div className="flex-grow mt-2 mb-5">
                <h3 className="text-lg font-semibold mb-1">{agent.name}</h3>
              </div>
            </div>

            <div className="w-full flex-col flex justify-center mt-2 relative">
              <p className="font-bold text-sm flex justify-between pl-3 pr-7">
                {agent.status} <span>{agent.duration}</span>
              </p>
              <p className="font-bold mt-1 text-sm flex justify-between pl-3 pr-4 relative">
                (Call)
                <span
                  className="cursor-pointer text-lg"
                  onClick={() => handleTogglePopup(agent.id)}
                >
                  ...
                </span>
                {activePopup === agent.id && (
                  <div className="absolute top-6 right-5 z-10">
                    <PopUp onClose={() => setActivePopup(null)} />
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
