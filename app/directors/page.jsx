import GeneralCards from '@components/GeneralCards'

const Directors = async () => {
  const response = await fetch(process.env.DIRECTORS);
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Directors</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Directors