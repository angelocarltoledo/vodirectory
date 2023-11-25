import RosterCards from '@components/RosterCards'

const Rosters = async () => {
  const response = await fetch(process.env.ROSTERS);
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Rosters and Databases</h1>
      <RosterCards data={sheetsData} category={category}/>
    </>
  )
}

export default Rosters