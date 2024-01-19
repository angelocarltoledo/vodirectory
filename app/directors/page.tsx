import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Directors = async () => {
  const [sheetsData, category] = await fetchData("DIRECTORS");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Directors</h2>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Director"></GeneralSuggestion>
    </>
  );
};

export default Directors;
