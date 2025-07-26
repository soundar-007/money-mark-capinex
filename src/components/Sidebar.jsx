"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { usePathname } from "next/navigation";

export default function SidebarComp() {
  const [visible, setVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

      handleResize(); // Initialize on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-primary text-white transition-all transform z-40 ${
          visible || isLargeScreen ? "w-64" : "w-16"
        } overflow-y-auto`}
      >
        <SidebarContent
          isExpanded={visible || isLargeScreen}
          setVisible={setVisible}
        />
      </div>

      {/* Overlay for Mobile */}
      {visible && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setVisible(false)}
        ></div>
      )}
    </div>
  );
}

function SidebarContent({ isExpanded, setVisible }) {
  const [workDropdown, setWorkDropdown] = useState(true);
  const [monitorDropdown, setMonitorDropdown] = useState(true);
  const [adminDropdown, setadminDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens on the client side
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-white px-4">
      {/* Close Button for Mobile */}
      {isExpanded && isClient && window.innerWidth < 1024 && (
        <div className="lg:hidden flex justify-end p-4">
          <i
            className="pi pi-times text-white cursor-pointer"
            onClick={() => setVisible(false)}
          ></i>
        </div>
      )}

      {/* Company Logo & Name */}
      {isExpanded && (
        <div className="flex flex-col items-center justify-center py-4">
          <img
            src="/path-to-logo.png"
            alt="CAPINEX Logo"
            className="h-8 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="text-xs text-gray-400 mt-1">MONEY MARK</p>
        </div>
      )}

      {/* Sidebar Items */}
      <div className="overflow-y-auto flex-1 mt-3">
        {/* Burger Menu Icon for Mobile */}
        {!isExpanded && (
          <i
            className="pi pi-bars px-3 py-1 mb-10 lg:hidden text-white cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={() => setVisible(true)}
          ></i>
        )}
        <ul className="list-none space-y-2">
          <SidebarItem
            icon="bx bx-pie-chart-alt-2"
            label="Home"
            isExpanded={isExpanded}
            href="/dashboard"
          />
          {/* <SidebarItem
            icon="bx bx-user"
            label="Admin Board"
            isExpanded={isExpanded}
            href="/dashboard/admin-board"
          /> */}

          <SidebarDropdown
            icon="bx bx-folder"
            label="Admin Board"
            isOpen={adminDropdown}
            toggle={() => setadminDropdown(!adminDropdown)}
            items={[
              {
                label: "Leads Trend",
                href: "/dashboard/admin-board/leads-trends",
              },
              {
                label: "Bank Statement",
                href: "/dashboard/admin-board/bank-statements",
              },
            ]}
            isExpanded={isExpanded}
          />

          {/* My Work Dropdown */}
          <SidebarDropdown
            icon="bx bx-folder"
            label="My Work"
            isOpen={workDropdown}
            toggle={() => setWorkDropdown(!workDropdown)}
            items={[
              { label: "Leads", href: "/dashboard/my-work/leads" },
              {
                label: "Backend Processing",
                href: "/dashboard/my-work/backend-processing",
              },
              {
                label: "Cold Calling",
                href: "/dashboard/my-work/cold-calling",
              },
              { label: "Backlog", href: "/dashboard/my-work/backlog" },
              {
                label: "Missed Calls",
                href: "/dashboard/my-work/missed-calls",
              },
            ]}
            isExpanded={isExpanded}
          />

          <SidebarItem
            icon="bx bx-check-shield"
            label="Disbursed Leads"
            isExpanded={isExpanded}
            href="/dashboard/disbursed-leads"
          />
          <SidebarItem
            icon="bx bx-star"
            label="Customer"
            isExpanded={isExpanded}
            href="/dashboard/customer"
          />
          <SidebarItem
            icon="bx bx-user-pin"
            label="Users"
            isExpanded={isExpanded}
            href="/dashboard/users"
          />
          <SidebarItem
            icon="bx bx-block"
            label="DND"
            isExpanded={isExpanded}
            href="/dashboard/dnd"
          />
          <SidebarItem
            icon="bx bx-send"
            label="Campaign"
            isExpanded={isExpanded}
            href="/dashboard/campaign"
          />

          {/* Monitoring Dropdown */}
          <SidebarDropdown
            icon="bx bx-headphone"
            label="Monitoring"
            isOpen={monitorDropdown}
            toggle={() => setMonitorDropdown(!monitorDropdown)}
            items={[
              {
                label: "Agent Board",
                href: "/dashboard/monitoring/agent-board",
              },
              {
                label: "Agent Report",
                href: "/dashboard/monitoring/agent-report",
              },
              {
                label: "Voice Logger",
                href: "/dashboard/monitoring/voice-logger",
              },
              { label: "SIM Map", href: "/dashboard/monitoring/sim-map" },
            ]}
            isExpanded={isExpanded}
          />
          <SidebarItem
            icon="bx bxs-bank"
            label="Bank Contact"
            isExpanded={isExpanded}
            href="/dashboard/bank-contact"
          />
          <SidebarItem
            icon="bx bx-share-alt"
            label="Connector"
            isExpanded={isExpanded}
            href="/dashboard/connector"
          />
          <SidebarItem
            icon="bx bx-phone"
            label="Dialer"
            isExpanded={isExpanded}
            href="/dashboard/dialer"
          />
          <SidebarItem
            icon="bx bx-git-repo-forked"
            label="Organization"
            isExpanded={isExpanded}
            href="/dashboard/organization"
          />
          <SidebarItem
            icon="bx bxs-bank"
            label="Bank"
            isExpanded={isExpanded}
            href="/dashboard/bank"
          />
          <SidebarItem
            icon="bx bxs-bank"
            label="Settlement"
            isExpanded={isExpanded}
            href="/dashboard/settlement"
          />
        </ul>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isExpanded, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log("path:", pathname, ":href", href);

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-3 text-white  px-3 py-1   ${
          isActive
            ? "bg-white text-primary font-semibold rounded hover:text-black-150"
            : "text-white hover:text-gray-600 hover:shadow-sm"
        }`}
      >
        <i className={`${icon} text-lg`}></i>
        {isExpanded && <span>{label}</span>}
      </Link>
    </li>
  );
}

function SidebarDropdown({ icon, label, isOpen, toggle, items, isExpanded }) {
  return (
    <li>
      <div
        className="p-ripple flex items-center justify-between text-white cursor-pointer hover:text-gray-300 px-3 py-2 "
        onClick={toggle}
      >
        <div className="flex items-center space-x-3">
          <i className={icon}></i>
          {isExpanded && <span className="font-medium">{label}</span>}
        </div>
        {isExpanded && (
          <i
            className={`pi pi-chevron-down transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        )}
        <Ripple />
      </div>
      {isExpanded && (
        <ul
          className={`list-none pl-6 mt-2 space-y-2 transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:text-gray-300 transition-transform duration-300 transform hover:scale-105"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
