import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Producers = async () => {
  const [sheetsData, category] = await fetchData("PRODUCERS");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Demo Producers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  );
};

export default Producers;
