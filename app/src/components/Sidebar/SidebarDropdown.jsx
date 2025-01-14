"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }) => {
  const pathname = usePathname();

  return (
    <ul className="pl-6 mt-4 space-y-2">
      {item.map((child, index) => (
        <li key={index}>
          <Link
            href={child.route}
            className={`block px-4 py-2 text-sm ${
              pathname === child.route ? "text-white bg-gray-700" : "text-gray-400"
            } hover:bg-gray-600 hover:text-white rounded-md`}
          >
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
