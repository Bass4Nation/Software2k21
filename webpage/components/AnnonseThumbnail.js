import Link from 'next/link'
import Image from 'next/image'

const AnnonseThumbnail = ({data}) => {
    console.log(data)

    const idPicture = "/images/"+data?.bildeid+".jpg"

    return (
        <>
        <h3>{data?.tittel}</h3>
        <img src={idPicture}/>
        {/* <Image 
        src={idPicture}
        alt="Annonse Bilde"
        width={500}
        height={500}
        /> */}
        <p>pris: {data?.kjopnu}</p>
        <Link  href={`/annonse/${encodeURIComponent(data?.id)}`}>LES MER</Link>
        </>
    )


}

export default AnnonseThumbnail