import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Directors = async () => {
  const [sheetsData, category] = await fetchData("DIRECTORS");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Directors</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  );
};

export default Directors;
