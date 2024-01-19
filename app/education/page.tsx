import GeneralCards from "@components/GeneralCards";
import GeneralSuggestion from "@components/GeneralSuggestion";
import fetchData from "@utils/fetchData";

const Education = async () => {
  const [sheetsData, category] = await fetchData("EDUCATION");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Education</h2>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
      <GeneralSuggestion category="Education"></GeneralSuggestion>
    </>
  );
};

export default Education;
