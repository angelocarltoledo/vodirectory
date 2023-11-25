import CoachCards from '@components/CoachCards'

const Coaches = async () => {
  const response = await fetch(process.env.COACHES, { cache: 'no-store' });
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Coaches</h1>
      <CoachCards data={sheetsData} category={category}></CoachCards>
    </>
  )
}


export default Coaches