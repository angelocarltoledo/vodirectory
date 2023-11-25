import GeneralCards from '@components/GeneralCards'

const Producers = async () => {
  const response = await fetch(process.env.PRODUCERS);
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Demo Producers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Producers