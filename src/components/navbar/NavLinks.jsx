import React, { useState } from "react";

const NavLinks = () => {
  const links = [
    {
      name: "Admissions",
      submenu: true,
      subLinks: [
        {
          head: "headline",
          subLink: [
            { name: "subhead", link: "/dfa" },
            { name: "subhead", link: "/fdsa" },
            { name: "subhead", link: "/sdfa" },
            { name: "subhead", link: "/sfa" },
            { name: "subhead", link: "/af" },
          ],
        },
        {
          head: "headline",
          subLink: [
            { name: "subhead", link: "/dfa" },
            { name: "subhead", link: "/fdsa" },
            { name: "subhead", link: "/sdfa" },
            { name: "subhead", link: "/sfa" },
            { name: "subhead", link: "/af" },
          ],
        },
        {
          head: "headline",
          subLink: [
            { name: "subhead", link: "/dfa" },
            { name: "subhead", link: "/fdsa" },
            { name: "subhead", link: "/sdfa" },
            { name: "subhead", link: "/sfa" },
            { name: "subhead", link: "/af" },
          ],
        },
      ],
    },
    { name: "Academics", submenu: false },
    { name: "Campus" },
    { name: "Research" },
    { name: "International" },
    { name: "About" },
  ];
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link.submenu === true ? (
                <>
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? (
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
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
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
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group">
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
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                </>
              ) : (
                ""
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 z-50 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.subLinks.map((subLink, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {subLink.head}
                        </h1>
                        {subLink.subLink.map((sLink, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <a>{sLink.name}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* For mobile view */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* Sub Links */}
            {link.submenu &&
              link.subLinks.map((sLinks, index) => (
                <div key={index}>
                  <div>
                    <h1
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between"
                      onClick={() => {
                        subHeading !== sLinks.head
                          ? setSubHeading(sLinks.head)
                          : setSubHeading("");
                      }}
                    >
                      {sLinks.head}

                      <span className="md:mt-1 md:ml-2 inline">
                        {subHeading === sLinks.head ? (
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
                              d="M4.5 15.75l7.5-7.5 7.5 7.5"
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
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        )}
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === sLinks.head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {sLinks.subLink.map((sLink, index) => (
                        <li key={index} className="py-3 pl-14">
                          <a>{sLink.name}</a>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
