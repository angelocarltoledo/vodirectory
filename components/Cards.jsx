'use client';

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation';

const Cards = ({ data }) => {
  const [search, setSearch] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [specialty, setSpecialty] = useState('');
  const pathname = usePathname();
  const category = pathname.toString().split("/")[1];

  
  switch (category) {
    case "rosters":
      return (
        <>
          <input
            type="text" 
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search'
            className='flex-grow rounded-2xl p-2'
          />
          
          <div className='flex gap-2'>
            <span>Type:</span>
            <select className='p-1' name="resourceType" id="resourceType" onChange={event => setResourceType(event.target.value.toLowerCase())}>
              <option value="">All</option>
              {filterUniqueResourceTypes(data).map(entry => (
                  <option key={entry.resourceType} value={entry.resourceType}>{entry.resourceType}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {(
              data[category].filter(entry => {
                return (search.toLowerCase() === '' ? entry : entry.name.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.resourceType.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.workType.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.demoRequired.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.notes.toLowerCase().includes(search))
                    && (entry.resourceType.toLowerCase().includes(resourceType));
              })
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(entry => (
                  <div key={entry.name} className="flex-grow p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.name}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Resource Type: {entry.resourceType}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work Type: {entry.workType}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Demo Required: {entry.demoRequired}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Notes: {entry.notes}</p>
                      <Link href={entry.link} target='blank' className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Go to Site!
                      </Link>
                  </div>
              ))
            )}
          </div>
        </>
      )
    case "coaches":
      return (
        <>
          <input
            type="text" 
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search'
            className='flex-grow rounded-2xl p-2'
          />

          <div className='flex gap-2'>
            <span>Specialty:</span>
            <select className='p-1' name="specialty" id="specialty" onChange={event => setSpecialty(event.target.value.toLowerCase())}>
              <option value="">All</option>
              {filterUniqueSpecialties(data).map(entry => (
                  <option key={entry} value={entry}>{entry}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {(
              data[category].filter(entry => {
                return (search.toLowerCase() === '' ? entry : entry.name.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.twitter.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.specialty.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.price.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.notes.toLowerCase().includes(search))
                    && (entry.specialty.toLowerCase().includes(specialty));
              })
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(entry => (
                  <div key={entry.name} className="flex-grow p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.name}</h5>
                      {entry.twitter && 
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Twitter/X: {entry.twitter}</p>
                      }
                      {entry.specialty && 
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Specialty: {entry.specialty}</p>
                      }
                      {entry.price ?
                        (
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {entry.price}</p>
                        ) : (
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: Not listed</p>
                        )
                      }
                      {entry.notes && 
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Notes: {entry.notes}</p>
                      }
                      <Link href={entry.link} target='blank' className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Go to Site!
                      </Link>
                  </div>
              ))
            )}
          </div>
        </>
      )
    default:
      return (
        <>
          <input
            type="text" 
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search'
            className='flex-grow rounded-2xl p-2'
          />

          <div className="flex flex-wrap gap-5 justify-center">
            {(
              data[category].filter(entry => {
                return (search.toLowerCase() === '' ? entry : entry.name.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.twitter.toLowerCase().includes(search)
                    || search.toLowerCase() === '' ? entry : entry.link.toLowerCase().includes(search));
              })
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(entry => (
                  <div key={entry.name} className="flex-grow p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.name}</h5>
                      {entry.twitter && 
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Twitter/X: {entry.twitter}</p>
                      }
                      <Link href={entry.link} target='blank' className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Go to Site!
                      </Link>
                  </div>
              ))
            )}
          </div>
        </>
      )
  }
}

const filterUniqueResourceTypes = (jsonData) => {
  const uniqueResourceTypes = {};

  return jsonData.rosters.filter((roster) => {
    if (!uniqueResourceTypes[roster.resourceType]) {
      uniqueResourceTypes[roster.resourceType] = true;
      return true;
    }
    return false;
  });
};

const filterUniqueSpecialties = (coachesJSON) => {
  const uniqueSpecialties = {};

  // Iterate through coaches and populate the uniqueSpecialties object
  coachesJSON.coaches.forEach(coach => {
    if (coach.specialty) {
      const specialties = coach.specialty.split('/').map(s => s.trim());
      specialties.forEach(specialty => {
        uniqueSpecialties[specialty] = true;
      });
    }
  });

  // Convert the object keys back to an array
  const result = Object.keys(uniqueSpecialties);

  console.log(result);
  return result;
}


export default Cards