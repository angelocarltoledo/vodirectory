import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Writers = async () => {
  const [sheetsData, category] = await fetchData("WRITERS");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Writers</h2>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Writer"></GeneralSuggestion>
    </>
  );
};

export default Writers;
