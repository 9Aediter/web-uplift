"use client";

import { useState } from "react";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header/headerAdmin";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`} // ระยะห่างเลื่อนตาม Sidebar
      >
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
