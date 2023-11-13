import data from '@data/rosters.json'
import Cards from '@components/Cards'

const Rosters = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Rosters and Databases</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Rosters