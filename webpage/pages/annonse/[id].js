import { useRouter } from 'next/router';

 const Annonse = () =>{
    const router = useRouter();


    return (
        <>
        <picture>
        <img src="" alt="Very nice antique" style="width:500px;"/>
        </picture>

        <h2>Tittel</h2>
        <p>Kjøp nå pris: XXX</p> <p>Bud pris: XXX</p>
        <button>Kjøp nå</button> <button>Gi bud</button>
        <p>Beskrivelse....</p>

        </>
    )

 }


 export default Annonse