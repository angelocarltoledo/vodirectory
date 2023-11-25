import GeneralCards from '@components/GeneralCards'

const Writers = async () => {
  const response = await fetch(process.env.WRITERS, { cache: 'no-store' });
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Writers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Writers