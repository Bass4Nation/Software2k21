import AnnonseThumbnail from "./AnnonseThumbnail"

const ShowAll = () =>{

    const annonser = [
        {id: 1, userId: 1,  title: 'Annonse 1', bilde: 'link til bilde', pris: '100kr'},
        {id: 2, userId: 1, title: 'Annonse 2', bilde: 'link til bilde', pris: '1020kr'},
        {id: 3, userId: 2, title: 'Annonse 3', bilde: 'link til bilde', pris: '10kr'},
    ]

    const all = annonser.map((annonse) =>(
        <AnnonseThumbnail data={annonse} />
    ))

    return( 
        <>
        <section>
        <h2>Alle Annonser</h2>
        {all}
        </section>
        </>
    )
}

export default ShowAll