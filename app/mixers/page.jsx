import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Mixers = async () => {
  const [sheetsData, category] = await fetchData("MIXERS");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Mixers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  );
};

export default Mixers;
