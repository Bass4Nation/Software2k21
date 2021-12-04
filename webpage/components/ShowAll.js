import AnnonseThumbnail from "./AnnonseThumbnail"

// import { useAllData } from "../hooks/useAllData"
import { useAllAnnonser } from "../hooks/useAllAnnonser"


const ShowAll = () =>{
    const {allannonser} = useAllAnnonser()
      console.log(allannonser)

    const all = allannonser?.map((annonse) =>(
        <AnnonseThumbnail key={annonse} data={annonse} />
    ))

    return( 
        <>
        <h2>Alle Annonser</h2>
        <section className="showAll">
        {all}
        </section>
        </>
    )
}

export default ShowAll