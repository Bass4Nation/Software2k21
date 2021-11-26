import Link from 'next/link'


const AnnonseThumbnail = ({data}) => {


    return (
        <>
        <h3>{data.title}</h3>
        <p>{data.bilde}</p>
        <p>pris: {data.pris}</p>
        <Link  href={`/annonse/${encodeURIComponent(data?.id)}`}>LES MER</Link>
        </>
    )


}

export default AnnonseThumbnail