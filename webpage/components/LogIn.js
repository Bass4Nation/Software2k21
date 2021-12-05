import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { useGlobalState } from "state-pool";

const LogIn = () => {
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [user, setUser] = useGlobalState("user");
  const router = useRouter();

  const { alldata } = useAllData();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // console.log(loggedInState);

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleLogInCheck = async (event) => {
    event.preventDefault();
    logInCheck();
  };

  const logInCheck = () => {
    alldata.forEach((element) => {
      if (element.username == form.username) {
        console.log("brukernavnet er der");
        if (element.password == form.password) {
          console.log("Passord er også riktig");
          setLoggedInState(true);
          setUser(element);
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
      </section>
      <section>
        <p>Test verdier</p>
        <p>Brukernavn: admin </p>
        <p>Passord: admin</p>
        <p>Eller</p>
        <p>Brukernavn: gruppe17 </p>
        <p>Passord: gruppe17</p>
      </section>
    </>
  );
};

export default LogIn;
