import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Education = async () => {
  const [sheetsData, category] = await fetchData("EDUCATION");

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Education</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  );
};

export default Education;
