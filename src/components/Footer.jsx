import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-primary text-white p-10">
        <div>
          <span className="footer-title">Information</span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">About Us</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Our Stories</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">My Account</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Our History</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Specialists Info</a>
          </span>
        </div>
        <div>
          <span className="footer-title">Student Help</span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">My Info</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">My Questions</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">FAQ</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Search Courses</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Latest information </a>
          </span>
        </div>
        <div>
          <span className="footer-title">Branding</span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">My Info</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">My Questions</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">FAQ</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Search Courses</a>
          </span>
          <span className="flex items-center justify-center">
            <FaAngleRight className="me-2" />{" "}
            <a className="link link-hover">Latest information </a>
          </span>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          PO Box UN152468, 1 Street North, New Towm, California, USA <br />
          Phone : 5 (012) 4565 789 <br />
          Fax : 5 (012) 4565 789 <br />
          Email : Info@info.com <br />
        </div>
      </footer>
      <footer className="footer  bg-primary text-white px-10 py-4 border-t text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <Link href="/" className=" cursor-pointer text-xl">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/logo_2.png"
              width={100}
              height={50}
              alt=""
            />{" "}
          </Link>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
