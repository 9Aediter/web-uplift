import React from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName, collapsed }) => {
  const handleClick = () => {
    setPageName(item.label);
  };

  const pathname = usePathname();
  const isActive = pathname === item.route;

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          isActive ? "bg-gray-700 text-white" : "text-gray-400"
        } hover:bg-gray-600 hover:text-white`}
      >
        {item.icon}
        {!collapsed && <span className="ml-2">{item.label}</span>} {/* Show label if not collapsed */}
      </Link>
      {item.children && pageName === item.label && (
        <SidebarDropdown item={item.children} />
      )}
    </li>
  );
};

export default SidebarItem;
