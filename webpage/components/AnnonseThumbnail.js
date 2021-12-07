import Link from "next/link";
import Image from "next/image";

const AnnonseThumbnail = ({ data }) => {
  //  ID for å finne bilde
  const idPicture = "/images/" + data?.bildeid + ".jpg";

  return (
    <>
      {/* Redirect til siden annonse med id som ligger i data. Når thumbnailen blir trykket på. */}
      <Link href={`/annonse/${encodeURIComponent(data?.id)}`} passHref>
        {/* Hva som blir vist på siden */}
        <section className="annonse">
          <h3>{data?.tittel}</h3>
          <Image src={idPicture} alt="Annonse Bilde" width={100} height={70} />
          <p>pris: {data?.kjopnu}kr</p>
          <p>LES MER</p>
        </section>
      </Link>
    </>
  );
};

export default AnnonseThumbnail;
