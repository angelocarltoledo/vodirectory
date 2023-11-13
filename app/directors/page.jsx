import data from '@data/directors.json'
import Cards from '@components/Cards'

const Directors = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Directors</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Directors