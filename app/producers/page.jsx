import data from '@data/producers.json'
import Cards from '@components/Cards'

const Producers = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Demo Producers</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Producers