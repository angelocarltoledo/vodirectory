import fetchData from '@utils/fetchData'
import GeneralCards from '@components/GeneralCards'

const Mixers = async () => {
  const [sheetsData, category] = await fetchData('mixers');

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Mixers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Mixers