import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { useGlobalState } from "state-pool";

const LogIn = () => {
  //  -------- Global variabler ------------------------
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [user, setUser] = useGlobalState("user");
  const router = useRouter();
  // -------- Kaller på custom hook --------------
  const { alldata } = useAllData();
  // ----------- useState Form -----------------
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  //  -------------- setter inn verdier fra input felt inn i form useState --------------
  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  //  --------------- sjekker login infoen som er i handleInputOnChange --------
  const handleLogInCheck = async (event) => {
    event.preventDefault();
    // -------- Kjører logInCheck for å sjekke info som er i form --------------
    logInCheck();
  };

  //  --------------- Her sjekkes form om den dataen er i databasen -------------
  const logInCheck = () => {
    alldata.forEach((element) => {
      // Sjekker om brukernavnet er i databasen
      if (element.username == form.username) {
        // Sjekker om passordet er det samme som brukt i databasen
        if (element.password == form.password) {
          // setter den global variabel til true
          setLoggedInState(true);
          // Fyller globale variable med data til brukeren som er innlogget.
          setUser(element);
          // Går til dashboard
          router.push("/dashboard/" + element.username);
        } else {
          alert("Passord er feil");
        }
      }
    });
  };

  return (
    <>
      <section>
        {/* Logg inn siden */}
        <form onSubmit={handleLogInCheck}>
          <p>Brukernavn</p>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputOnChange}
            value={form.username}
          />
          <p>Passord</p>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputOnChange}
            value={form.password}
          />
          <button type="submit">Logg inn</button>
        </form>
        <section>
        <p>Test verdier</p>
        <p>Brukernavn: admin </p>
        <p>Passord: admin</p>
        <p>Eller</p>
        <p>Brukernavn: gruppe17 </p>
        <p>Passord: gruppe17</p>
      </section>
      </section>
      {/* Bare test verdier som sensor kan bruke for å logge seg inn på nettsiden */}
    </>
  );
};

export default LogIn;
