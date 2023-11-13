import data from '@data/writers.json'
import Cards from '@components/Cards'

const Writers = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Writers</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Writers