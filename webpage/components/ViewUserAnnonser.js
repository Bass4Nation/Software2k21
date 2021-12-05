import Image from "next/image";
import Link from 'next/link'
import { useGlobalState } from "state-pool";
import NotShow from "./NotShow";

const ViewUserAnnonser = () => {
  const [user, setUser] = useGlobalState("user");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [alt, setAlt] = useGlobalState("visAlt");

  console.log(alt)
  console.log(user?.userannonser)

  return (
    <>
    {loggedInState ? 
      <section className="userannonser">
        {user?.userannonser?.map((i) => (
          <>
          <Link key={i?.id} href={`/annonse/${encodeURIComponent(i?.id)}`} passHref>
          <section key={i.id} className="annonse">
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
          </Link>
          </>
        ))}
      </section>
    : <NotShow/> }
    </>
  );
};

export default ViewUserAnnonser;
