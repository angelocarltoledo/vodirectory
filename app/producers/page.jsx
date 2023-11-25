import fetchData from '@utils/fetchData'
import GeneralCards from '@components/GeneralCards'

const Producers = async () => {
  const [sheetsData, category] = await fetchData('producers');

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Demo Producers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Producers