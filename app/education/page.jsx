import fetchData from '@utils/fetchData'
import GeneralCards from '@components/GeneralCards'

const Education = async () => {
  const [sheetsData, category] = await fetchData('education');

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Education</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Education