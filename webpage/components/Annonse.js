import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useGlobalState } from "state-pool";

const Annonse = () => {
  const router = useRouter();
  // ------------- Globale variabler ------------------
  const [alt, setAlt] = useGlobalState("visAlt");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");

  // ---------------- useState --------------------------
  const [bidState, setBidState] = useState(false);
  const [yourBid, setYourBid] = useState(0);

  //  --------------- inputfield for å by på vare --------------
  const handleBidInput = (event) => {
    setYourBid(event.currentTarget.value);
  };
  //  ---------- Kjøpe vare knapp -------
  // Går til en transaksjon side om brukeren er innlogget
  const handleBuyBtn = () => {
    if (loggedInState == true) {
      router.push("/annonse/transaksjon");
    } else {
      alert("Du må være innlogget for å kjøpe en vare");
    }
  };
  //  --------------- Gi bud knapp -----------
  // Virker bare om brukeren er innlogget
  // setter setBidState til true for å vise et bud input felt
  const handleBidBtn = () => {
    if (loggedInState == true) {
      setBidState(true);
    } else {
      alert("Du må være innlogget for å gi et bud på varen");
    }
  };
  // ------------ Plassere bud knapp --------------
  // Den tar bare det som blir skrevet i inputfeltet og
  // printer det som blir skrevet i en alert
  const handlePlaceBidBtn = () => {
    if (yourBid != 0) {
      alert("Du har nå lagt inn et bud på " + yourBid + "kr.");
    } else {
      alert("Du må legge inn et bud over 0kr");
    }
  };
  // --------------- Lukke budgiving knapp --------------
  // Bare setter setBidState til false for å fjerne input fra siden.
  const handleCloseBidBtn = () => {
    if (loggedInState == true) {
      setBidState(false);
    } else {
      alert("Du må være innlogget for å gi et bud på varen");
    }
  };

  // ---------- input feltet for å gi bud. Som blir vist på siden.
  const bidField = (
    <>
      <br />
      <input type="number" id="bud" name="bud" onChange={handleBidInput} />
      <button onClick={handlePlaceBidBtn}>Plasser bud</button>
      <br />
      <button onClick={handleCloseBidBtn}>Lukk Bud</button>
    </>
  );

  return (
    <>
      {/* Leter etter en annonse med samme id som id i linkadressen */}
      {alt
        ?.filter((annonse) => annonse.id.toString() === router.query.id)
        ?.map((i) => (
          <section key={i.id}>
            {/* Viser info til den annonsen */}
            <h2>{i.tittel}</h2>
            <Image
              src={"/images/" + i?.bildeid + ".jpg"}
              alt="Annonse Bilde"
              width={200}
              height={150}
            />
            <p>Kjøp nå pris: {i.kjopnu}</p> <p>Bud pris: {i.startbud}</p>
            <button onClick={handleBuyBtn}>Kjøp varen nå</button>
            {/* Viss bidState er true så vises input feltet ellers så vises gi bud knappen */}
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
