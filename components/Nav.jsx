"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import mainlogo from "@public/mainlogo.png";

const list = [
  "Writers",
  "Mixers",
  "Directors",
  "Producers",
  "Education",
  "Coaches",
];

const Nav = () => {
  const [isClick, setisClick] = useState();

  const toggleNav = () => {
    setisClick(!isClick);
  };
  return (
    <nav>
      <div className="max-w-7xl mt-3 lg:mb-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 text-zinc-200">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Link className="object-contain" href="/">
                <Image
                  alt="VODirectory logo"
                  src={mainlogo}
                  width={120}
                ></Image>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex flex-wrap items-center gap-4">
              {list.map((entry) => (
                <Link
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-zinc-800 rounded-full p-3"
                  href={"/" + entry.toLowerCase()}
                >
                  {entry}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNav}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 -sm:px-3">
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/writers"
            >
              Writers
            </Link>
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/mixers"
            >
              Mixers
            </Link>
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/directors"
            >
              Directors
            </Link>
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/producers"
            >
              Producers
            </Link>
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/education"
            >
              Education
            </Link>
            <Link
              className="pl-5 py-1 block hover:bg-yellow-400 rounded-full"
              href="/coaches"
            >
              Coaches
            </Link>
            {/* <Link className="pl-5 py-1 block hover:bg-yellow-400" href="/rosters">Rosters and Databases</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
