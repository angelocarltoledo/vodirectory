import data from '@data/coaches.json'
import Cards from '@components/Cards'

const Coaches = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Coaches</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Coaches