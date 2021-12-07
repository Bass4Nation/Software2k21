import NavComponent from "./NavComponent";
import { useState } from "react";
import Link from "next/link";
import { store, useGlobalState } from "state-pool";
import { useAllAnnonser } from "../hooks/useAllAnnonser";
import { useRouter } from "next/dist/client/router";

//---------- Her lages alle globale variablene -----------
store.setState("stateUser", false);
store.setState("user", []);
store.setState("visAlt", []);
store.setState("nye", []);
store.setState("visNye", false);
// -------------------------------------

const Nav = () => {
  const router = useRouter();
  // ----- Globale variabler -----------------
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [user, setUser] = useGlobalState("user");
  const [alt, setAlt] = useGlobalState("visAlt");

  //  -------- useState Søkefelt ------------
  const [seaching, setSearching] = useState("");

  //---------- Custom hook for å få alle annonser---------
  // Må kjøres her for at den globale variabelen visAlt skal få inn data
  const { allAnnonser } = useAllAnnonser();
  // --------- Søkefelt -----------------------
  const searchField = (event) => {
    setSearching(event.currentTarget.value);
  };
  // ----------- knapp for å søke etter en annonse --------------
  // Får bare søkt etter en annonse. Vis man skriver det helt likt
  // eks gammel telefon = feil... Men Gammel Telefon er riktig
  const handleSearchBtn = () => {
    alt.forEach((annonse) => {
      if (annonse.tittel === seaching) {
        router.push("/annonse/" + annonse.id);
      }
    });
  };

  // ------ array for hva som skal bli vist i navigasjonen
  const navElements = [
    { link: "/", lable: "Show all" },
    // {link: 'link adresse', lable: 'nav tab title'},
  ];

  // -------- .map på listen over og viser de som et NavComponet på siden. ------------
  const navList = navElements.map((single) => (
    <NavComponent key={single.lable} data={single} />
  ));

  return (
    <>
      <ul>
        {/* Legger ut listen navElements her */}
        {navList}
        {/* Søkefeltet */}
        <li>
          <section>
            <input
              type="text"
              onChange={searchField}
              id="searchField"
              placeholder="Søkefelt"
            />
            <button className="searchbtn" onClick={handleSearchBtn}>
              SØK
            </button>
          </section>
        </li>
        {/* Viss man er logget inn så skal det ikke stå at man er innlogget. Men heller stå brukernavnet til brukeren i navigasjonsfeltet */}
        {/* Så viss loggedInState er true så viser siden brukernavnet */}
        {/* Viss false så viser den Login */}
        {loggedInState ? (
          <li>
            <Link href={`/dashboard/` + user.username}>{user.username}</Link>
          </li>
        ) : (
          <li className="login">
            <Link href={`/user/login`}>Login</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Nav;
