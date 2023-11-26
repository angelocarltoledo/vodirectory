"use server";

export const fetchData = async(category) => {
    const response = await fetch(process.env[category], { cache: 'no-store' });
    const data = await response.json();
    const cat = Object.keys(data)[0];

    return [data, cat];
}