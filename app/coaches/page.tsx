import CoachCards from "@components/CoachCards";
import fetchData from "@utils/fetchData";

const Coaches = async () => {
  const [sheetsData, category] = await fetchData("COACHES");

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Coaches</h2>
      <CoachCards data={sheetsData} category={category}></CoachCards>
    </>
  );
};

export default Coaches;
