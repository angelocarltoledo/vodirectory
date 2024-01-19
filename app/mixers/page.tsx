import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Mixers = async () => {
  const [sheetsData, category] = await fetchData("MIXERS");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Mixers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Mixer"></GeneralSuggestion>
    </>
  );
};

export default Mixers;
