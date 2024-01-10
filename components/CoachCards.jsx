"use client";

import Link from "next/link";
import { useState } from "react";

const CoachCards = ({ data, category }) => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [order, setOrder] = useState("asc");
  const coaches = { ...data };

  const orderedCoaches = coaches[category].filter((entry) => {
    return (
      (search.toLowerCase() === ""
        ? entry
        : entry.name.toLowerCase().includes(search) ||
          search.toLowerCase() === ""
        ? entry
        : entry.twitter.toLowerCase().includes(search) ||
          search.toLowerCase() === ""
        ? entry
        : entry.specialty.toLowerCase().includes(search) ||
          // || search.toLowerCase() === '' ? entry : entry.price.toLowerCase().includes(search)
          search.toLowerCase() === ""
        ? entry
        : entry.notes.toLowerCase().includes(search)) &&
      entry.specialty.toLowerCase().includes(specialty)
    );
  });

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search"
        className="flex-grow rounded-2xl p-2"
      />

      <div className="flex flex-col gap-3 justify-center">
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex gap-2">
            <span>Specialty:</span>
            <select
              className="p-1"
              name="specialty"
              id="specialty"
              onChange={(event) =>
                setSpecialty(event.target.value.toLowerCase())
              }
            >
              <option value="">All</option>
              {filterUniqueSpecialties(data)
                .sort()
                .map((entry) => (
                  <option key={entry} value={entry}>
                    {entry}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex gap-2">
            <span>Price:</span>
            <select
              className="p-1"
              name="specialty"
              id="specialty"
              onChange={(event) => setOrder(event.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <p>
          NOTE: All featured prices are for private one hour sessions. See
          individual notes for other services and prices.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {orderedCoaches
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort((a, b) =>
            order === "asc" ? a.price - b.price : b.price - a.price
          )

          .map((entry) => (
            <div
              key={entry.name}
              className="flex-grow w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {entry.name}
              </h5>
              {entry.twitter && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Twitter/X: {entry.twitter}
                </p>
              )}
              {entry.specialty && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Specialty: {entry.specialty}
                </p>
              )}
              {entry.price !== "0" ? (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: ${entry.price}
                </p>
              ) : (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: Not listed
                </p>
              )}
              {entry.notes && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Notes: {entry.notes}
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

const filterUniqueSpecialties = (coachesJSON) => {
  const uniqueSpecialties = {};

  // Iterate through coaches and populate the uniqueSpecialties object
  coachesJSON.coaches.forEach((coach) => {
    if (coach.specialty) {
      const specialties = coach.specialty.split(" / ").map((s) => s.trim());
      specialties.forEach((specialty) => {
        uniqueSpecialties[specialty] = true;
      });
    }
  });

  // Convert the object keys back to an array
  const result = Object.keys(uniqueSpecialties);

  return result;
};

export default CoachCards;
