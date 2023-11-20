import RosterCards from './RosterCards';
import CoachCards from './CoachCards';
import GeneralCards from "./GeneralCards";

const Cards = ({ data }) => {
  const category = Object.keys(data)[0];

  switch (category) {
    case "rosters":
      return <RosterCards data={data} category={category}/>
    case "coaches":
      return <CoachCards data={data} category={category}/>
    default:
      return <GeneralCards data={data} category={category}/>
  }
}

export default Cards