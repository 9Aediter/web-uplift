import Link from "next/link";
import Image from "next/image";
import DarkSwitch from "@/components/DarkSwitch";
import { FiMessageSquare, FiBell, FiUser } from "react-icons/fi";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 flex w-full shadow-md z-25 bg-base-100">
      <div className="flex items-center justify-between w-full px-4 py-3">
        {/* Hamburger Menu  */}
        <button
          aria-label="Toggle Sidebar"
          onClick={() => setSidebarOpen(!sidebarOpen)} // สลับค่า sidebarOpen
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Switch */}
          <div className="btn btn-ghost btn-circle">
            <DarkSwitch />
          </div>

          {/* Notification Icon */}
          <button
            aria-label="Notifications"
            className="btn btn-ghost btn-circle"
          >
            <FiBell className="w-6 h-6" />
          </button>

          {/* Message Icon */}
          <button aria-label="Messages" className="btn btn-ghost btn-circle">
            <FiMessageSquare className="w-6 h-6" />
          </button>

          {/* User Icon */}
          <button aria-label="User Menu" className="btn btn-ghost btn-circle">
            <FiUser className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
