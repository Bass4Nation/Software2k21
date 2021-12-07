import AnnonseThumbnail from "./AnnonseThumbnail"
import { useGlobalState} from 'state-pool';

const ShowAll = () =>{
    // ---------- Globale variabler ------------------
    const [alt, setAlt] = useGlobalState("visAlt");

    // ---- slik man kan kalle på all istedenfor alt.map og slik nede i returnen ---------------------
    const all = alt?.map((annonse) =>(
        <AnnonseThumbnail key={annonse.id} data={annonse} />
    ))

    return( 
        <>
        <h2>Alle Annonser</h2>
        <section className="showAll">
            {/* Viser alle annonsene som er i APIet */}
        {all}
        {/* Her blir de nye annonsene vist om de blir laget. Og disse er temp på siden for nå  */}
        {/* Siden viss dette projektet skulle ha blitt brukt så tenker vi at man trenger en ekstern database */}
        </section>
        </>
    )
}

export default ShowAll