"use client";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="flex items-center font-medium justify-between">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/logo_2.png"
              width={100}
              height={50}
              alt="Logo"
              className="md:cursor-pointer"
            />
            <div className="text-3xl md:hidden block" onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
            <li>
              <a href="" className="py-7 px-3 inline-block">
                Home
              </a>
            </li>
            <NavLinks />
          </ul>
          <button className="btn btn-primary hidden md:block">Login</button>
          {/* Mobile Nav */}
          <ul
            className={`md:hidden bg-white absolute w-full h-screen bottom-0 py-24 pl-4 z-10 duration-500 ${open? "left-0": "left-[-100%]"}`}
          >
            <li>
              <a href="" className="py-7 px-3 inline-block">
                Home
              </a>
            </li>
            <NavLinks />
            <div className="py-5">
              <button className="btn btn-primary">Login</button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
