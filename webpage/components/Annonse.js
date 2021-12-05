import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useGlobalState } from "state-pool";

const Annonse = () => {
  const router = useRouter();
  const [alt, setAlt] = useGlobalState("visAlt");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");

  const [bidState, setBidState] = useState(false);
  const [yourBid, setYourBid] = useState(0);

  const handleBidInput = (event) => {
    setYourBid(event.currentTarget.value);
  };

  const handleBuyBtn = () => {
    if (loggedInState == true) {
      router.push("/annonse/transaksjon");
    } else {
      alert("Du må være innlogget for å kjøpe en vare");
    }
  };

  const handleBidBtn = () => {
    if (loggedInState == true) {
      setBidState(true);
    } else {
      alert("Du må være innlogget for å gi et bud på varen");
    }
  };
  const handlePlaceBidBtn = () => {
    if (yourBid != 0) {
      alert("Du har nå lagt inn et bud på " + yourBid + "kr.");
    } else {
      alert("Du må legge inn et bud over 0kr");
    }
  };

  const handleCloseBidBtn = () => {
    if (loggedInState == true) {
      setBidState(false);
    } else {
      alert("Du må være innlogget for å gi et bud på varen");
    }
  };

  const bidField = (
    <>
      <br />
      <input type="number" onChange={handleBidInput} />
      <button onClick={handlePlaceBidBtn}>Plasser bud</button>
      <br />
      <button onClick={handleCloseBidBtn}>Lukk Bud</button>
    </>
  );

  return (
    <>
      {alt
        ?.filter((annonse) => annonse.id.toString() === router.query.id)
        ?.map((i) => (
          <section key={i.id}>
            <h2>{i.tittel}</h2>
            <Image
              src={"/images/" + i?.bildeid + ".jpg"}
              alt="Annonse Bilde"
              width={200}
              height={150}
            />
            <p>Kjøp nå pris: {i.kjopnu}</p> <p>Bud pris: {i.startbud}</p>
            <button onClick={handleBuyBtn}>Kjøp nå</button>
            {bidState ? (
              bidField
            ) : (
              <button onClick={handleBidBtn}>Gi bud</button>
            )}
            <p>----------- Beskrivelse -----------</p>
            <p>{i.beskrivelse}</p>
          </section>
        ))}
    </>
  );
};

export default Annonse;
