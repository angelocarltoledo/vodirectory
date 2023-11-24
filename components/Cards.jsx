import CoachCards from './CoachCards';
import GeneralCards from "./GeneralCards";

const Cards = ({ data }) => {
  const category = Object.keys(data)[0];

  switch (category) {
    case "coaches":
      return <CoachCards data={data} category={category}/>
    default:
      return <GeneralCards data={data} category={category}/>
  }
}

export default Cards