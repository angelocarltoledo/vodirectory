const fetchData = async (category: string) => {
  const response = await fetch(process.env[category], { cache: "no-store" });
  const data: JSON = await response.json();
  const cat: string = Object.keys(data)[0];

  return [data, cat];
};

export default fetchData;
