import GeneralCards from "@components/GeneralCards";
import fetchData from "@utils/fetchData";

const Writers = async () => {
  // const response = await fetch(process.env.WRITERS, { cache: "no-store" });
  // const sheetsData = await response.json();
  // const category = Object.keys(sheetsData)[0];
  const [sheetsData2, cat2] = await fetchData("WRITERS");
  console.log(sheetsData2, cat2);

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Writers</h1>
      <GeneralCards data={sheetsData2} category={cat2}></GeneralCards>
    </>
  );
};

export default Writers;
