import Image from "next/image";
import { useGlobalState } from "state-pool";

const ViewUserAnnonser = () => {
  const [user, setUser] = useGlobalState("user");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");

  return (
    <>
    {loggedInState ? 
      <section className="userannonser">
        {user?.userannonser?.map((i) => (
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
        ))}
      </section>
    : <h2>Du må være innlogget for å se dine annonser</h2>}
    </>
  );
};

export default ViewUserAnnonser;
