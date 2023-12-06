import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Writers = async () => {
  const [sheetsData, category] = await fetchData("WRITERS");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Writers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  );
};

export default Writers;
