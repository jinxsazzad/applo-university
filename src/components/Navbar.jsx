"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import NavLink from "./NavLink";
import Image from "next/image";
import { ActionBtn } from "./shared/Buttons";
const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className=" max-container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink />
            </ul>
          </div>
          <Link href="/" className=" cursor-pointer text-xl">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/logo_2.png"
              width={100}
              height={50}
              alt=""
            />{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-50">
            <NavLink />
          </ul>
        </div>
        <div className="navbar-end">
          <ActionBtn link="#" text="Apply Now" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
