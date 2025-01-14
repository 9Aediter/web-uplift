"use client";
import Link from "next/link";
import ThemeChanger from "@/components/DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "My Story", href: "/story" },
    { name: "Our Service", href: "/service" },
    { name: "Community", href: "/login" },
    { name: "Ideation", href: "/ideation" },
  ];

  useEffect(() => {
    // ตรวจสอบการเลื่อนของหน้าและเปลี่ยนสถานะ
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full ">
      <nav
        className={`container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1 transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        } fixed top-0 left-0 right-0 z-10`}
      >
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-text dark:text-text">
            <span>
              <Image
                src="/img/logo.svg"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>Uplift</span>
          </span>
        </Link>

        {/* Consult Button */}
        <div className="gap-3 ml-auto mr-2 nav__item lg:flex lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/consult"
              className="px-6 py-2 text-white rounded-md bg-primary md:ml-5"
            >
              Consult
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure>
          {({ open }) => (
            <>
              {/* Hamburger Button */}
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile Menu Content */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/consult"
                  className="w-full px-6 py-2 mt-3 text-center text-white rounded-md bg-primary lg:ml-5"
                >
                  Consult
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal no-underline border-b-2 border-transparent text-text dark:text-text hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 hover:border-primary"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
