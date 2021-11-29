import { useRouter } from 'next/router';
import { useAllAnnonser } from '../../hooks/useAllAnnonser';
import Image from 'next/image'



 const Annonse = () =>{
    const router = useRouter()

    const {allannonser} = useAllAnnonser()



    return (
        <>
        <section>
        {allannonser
        ?.filter(annonse => annonse.id.toString() === router.query.id)
        ?.map((i)=>(
            <>
            <h2>{i.tittel}</h2>
            <Image
              src={"/images/" + i?.bildeid + ".jpg"}
              alt="Annonse Bilde"
              width={200}
              height={150}
            />

        <p>Kjøp nå pris: {i.kjopnu}</p> <p>Bud pris: {i.startbud}</p>
        <button>Kjøp nå</button> <button>Gi bud</button>
        <p>----------- Beskrivelse -----------</p>
        <p>{i.beskrivelse}</p>
        </>


        ))}
        </section>

        </>
    )

 }


 export default Annonse