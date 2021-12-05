import AnnonseThumbnail from "./AnnonseThumbnail"
import { useGlobalState} from 'state-pool';

const ShowAll = () =>{
    const [alt, setAlt] = useGlobalState("visAlt");
    const [nye, setNye] = useGlobalState("nye");
    const [visNye, setVisNye] = useGlobalState("visNye");



    const all = alt?.map((annonse) =>(
        <AnnonseThumbnail key={annonse.id} data={annonse} />
    ))

    return( 
        <>
        <h2>Alle Annonser</h2>
        <section className="showAll">
        {all}
        {visNye ? (
        nye.map((an)=> (
            <AnnonseThumbnail key={an.id} data={an} />
        ))
        ): null}
        </section>
        </>
    )
}

export default ShowAll