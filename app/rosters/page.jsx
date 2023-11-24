// import data from '@data/rosters.json'
import RosterCards from '@components/RosterCards'

const Rosters = async () => {

  const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=Jifw5j4MCShxkUGUO-bp2ZSPP8hR2H_5vU04366H6GE2i9T8FUVIKaRO5n7Hs91T6qRY9EMtYGwSExBDnpwKMllAeCMoVHonm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA75N0LJuuFNjW8xYjddVC07Otf9KJiyKmIccLfZ8oyakaxcCrCxTjuIPUv1XpBIfxQp8fvgnPLO1pEm98P7TKL7hO-45zpFYw&lib=MVnfNb182dIAMPwrwURH-1SYNPH1PCFKC", { next: { revalidate: 1 }});
  const sheetsData = await response.json();
  const category = Object.keys(sheetsData)[0];

  // console.log(sheetsData, sheetsData.type, Object.keys(sheetsData)[0]);


  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Rosters and Databases</h1>
      <RosterCards data={sheetsData} category={category}/>
    </>
  )
}

export default Rosters