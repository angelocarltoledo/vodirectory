import fetchData from '@utils/fetchData'
import CoachCards from '@components/CoachCards'

const Coaches = async () => {
  const [sheetsData, category] = await fetchData('coaches');

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Coaches</h1>
      <CoachCards data={sheetsData} category={category}></CoachCards>
    </>
  )
}


export default Coaches