import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Admissions</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Academics</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Campus</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Research</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>International</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>About</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};

export default NavLink;
