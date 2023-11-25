import fetchData from '@utils/fetchData'
import RosterCards from '@components/RosterCards'

const Rosters = async () => {
  const [sheetsData, category] = await fetchData('rosters');
  
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Rosters and Databases</h1>
      <RosterCards data={sheetsData} category={category}/>
    </>
  )
}

export default Rosters