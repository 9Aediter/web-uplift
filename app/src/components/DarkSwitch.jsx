"use client";
import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("sunset"); // เริ่มต้นด้วย "sunset"

  // เมื่อ component ถูก mount, ตรวจสอบค่า theme ปัจจุบัน
  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "sunset";
    setTheme(currentTheme);
  }, []); // ตรวจสอบค่าเฉพาะครั้งแรกที่ render

  // เปลี่ยนธีมโดยการตั้งค่า data-theme ใน <html>
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "sunset" : "light"; // เปลี่ยนระหว่าง "light" และ "sunset"
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme); // อัปเดตสถานะ (state) ของ theme
  };

  return (
    <div className="flex items-center order-last">
      {theme === "sunset" ? (
        <button
          onClick={toggleTheme}
          className="text-gray-300 rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Switch to Light Theme</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Switch to Sunset Theme</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
