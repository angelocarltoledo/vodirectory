import fetchData from '@utils/fetchData'
import GeneralCards from '@components/GeneralCards'

const Writers = async () => {
  const [sheetsData, category] = await fetchData('writers');
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Writers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Writers