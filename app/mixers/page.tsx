import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Mixers = async () => {
  const [sheetsData, category] = await fetchData("MIXERS");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Mixers</h2>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Mixer"></GeneralSuggestion>
    </>
  );
};

export default Mixers;
