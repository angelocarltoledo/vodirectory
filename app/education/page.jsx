import GeneralCards from '@components/GeneralCards'

const Education = async () => {
  const response = await fetch(process.env.EDUCATION);
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Education</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Education