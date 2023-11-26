import { fetchData } from '@utils/fetchData'
import GeneralCards from '@components/GeneralCards'

const Producers = async () => {
  // const response = await fetch(process.env.PRODUCERS, { cache: 'no-store' });
  // const sheetsData = await response.json();
  // const category = Object.keys(sheetsData)[0];
  const [sheetsData, category] = await fetchData('producers');
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Demo Producers</h1>
      <GeneralCards data={sheetsData} category={category}></GeneralCards>
    </>
  )
}

export default Producers