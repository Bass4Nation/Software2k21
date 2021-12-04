import { useAllData } from "../../hooks/useAllData";
import Image from "next/image";

const viewAll = () => {
  const { alldata } = useAllData();

  const alleAnnonser = alldata[0]?.userannonser;
//   const idPicture = "/images/" + data?.bildeid + ".jpg";

  console.log(alleAnnonser);

  return (
    <>
      <section className="userannonser">
        {alleAnnonser?.map((i) => (
          <section className="annonse">
            <p>Tittel: {i.tittel}</p>
            <p>Beskrivelse: {i.beskrivelse}</p>
            <p>Kjøpspris: {i.kjopnu}kr</p>
            <p>StartBud: {i.startbud}kr</p>
            <p>Bilde</p>
            <Image
              src={"/images/" + i?.bildeid + ".jpg"}
              alt="Annonse Bilde"
              width={200}
              height={150}
            />
          </section>
        ))}
      </section>
    </>
  );
};

export default viewAll;
