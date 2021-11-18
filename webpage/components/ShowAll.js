import AnnonseTumbnail from "./AnnonseTumbnail"

const ShowAll = () =>{

    const annonser = [
        {id: 1, title: 'Annonse 1', bilde: 'link til bilde', pris: '100kr'},
        {id: 2, title: 'Annonse 2', bilde: 'link til bilde', pris: '1020kr'},
        {id: 3, title: 'Annonse 3', bilde: 'link til bilde', pris: '10kr'},
    ]

    const all = annonser.map((annonse) =>(
        <AnnonseTumbnail data={annonse} />
    ))

    return( 
        <>
        <section>
        {all}
        </section>
        </>
    )
}

export default ShowAll