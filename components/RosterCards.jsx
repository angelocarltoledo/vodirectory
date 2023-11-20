"use client"

import Link from 'next/link';
import { useState } from 'react'

const RosterCards = ({data, category}) => {
  const [search, setSearch] = useState('');
  const [resourceType, setResourceType] = useState('');

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
                        <Link href={entry.link} target='_blank' className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Go to Site!
                        </Link>
                    </div>
                ))
            )}
        </div>
    </>
  )
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

export default RosterCards