import data from '@data/education.json'
import Cards from '@components/Cards'

const Education = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Education</h1>
      <Cards data={data}></Cards>
    </>
  )
}

export default Education