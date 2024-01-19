import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Producers = async () => {
  const [sheetsData, category] = await fetchData("PRODUCERS");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Demo Producers</h2>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Producer"></GeneralSuggestion>
    </>
  );
};

export default Producers;
