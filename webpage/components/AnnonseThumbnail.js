import Link from 'next/link'
import Image from 'next/image'

const AnnonseThumbnail = ({data}) => {
    // console.log(data)

    const idPicture = "/images/"+data?.bildeid+".jpg"

    return (
        <>
        <section className="annonse">
        <h3>{data?.tittel}</h3>
        <Image 
        src={idPicture}
        alt="Annonse Bilde"
        width={100}
        height={70}
        />
        <p>pris: {data?.kjopnu}kr</p>
        <Link  href={`/annonse/${encodeURIComponent(data?.id)}`}>LES MER</Link>

        </section>
        </>
    )


}

export default AnnonseThumbnail