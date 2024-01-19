"use client";

import Link from "next/link";
import { useState } from "react";

const GeneralCards = ({ data, category }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search"
        className="flex-grow rounded-2xl p-2"
      />

      <div className="flex flex-wrap gap-5 justify-center">
        {data[category]
          .filter((entry) => {
            return search.toLowerCase() === ""
              ? entry
              : entry.name.toLowerCase().includes(search) ||
                search.toLowerCase() === ""
              ? entry
              : entry.twitter.toLowerCase().includes(search);
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((entry) => (
            <div
              key={entry.name}
              className="flex-grow p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {entry.name}
              </h5>
              {entry.twitter && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Twitter/X: {entry.twitter}
                </p>
              )}
              <Link
                href={entry.link}
                target="_blank"
                className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to Site
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default GeneralCards;
