import data from '@data/mixers.json'
import Cards from '@components/Cards'

const Mixers = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Mixers</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Mixers