import Link from "next/link"

const Home = () => {

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Welcome to VODirectory</h1>
      <p className='text-lg text-center pt-3'>This simple website aims to serve voice actors in the way that most, if not all, the resources they need will be here in this one place. I hope this accomplishes that for you today and improvements are sure to come little by little.  :)</p>
      <div className="flex flex-col text-center text-lg">
        <p><u>Acknowledgements and Resources</u></p>
        <p>Belsheber Rusape — <Link href="https://docs.google.com/document/d/1QHAeH4gtx_vSz958HqpANEBJ7nJRWPsPXVatcdWbU7M/edit?usp=sharing" target='_blank' className='hover:text-teal-200'>Belsheber Rusape Voice Demo Script Commissions</Link></p>
        <p>Sam Slade & Marcus Rothenberg — <Link href="https://docs.google.com/spreadsheets/d/17z2coJ5xRsIVz8lDvcln8fldxaat7YDnS0pOJ-SHxn4/edit?usp=sharing" target='_blank' className='hover:text-teal-200'>Rosters, Databases, and Where to Find Work!</Link></p>
        <p>Jamie McKiernan — <Link href="https://docs.google.com/spreadsheets/d/1PxIHo3XbLVX4cVhQEMCGy_Y891wIzkIiQ413TLnWVy8/edit?usp=sharing" target='_blank' className='hover:text-teal-200'>Voice Acting Database Winter 2021</Link></p>
      </div>
    </>
    )
}

export default Home