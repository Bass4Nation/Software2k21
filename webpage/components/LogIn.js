import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { useUser } from "../hooks/useUser";
import { makeAdmin, removeAdmin } from "../lib/utils/user";

const LogIn = () => {
  const router = useRouter();
  const { user, admin, setSelectedUser } = useUser();
  console.log(user);

  const { alldata } = useAllData();
  console.log(alldata);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleLogDirectInBtn = () => {
    router.push("/dashboard/admin");
  };

  const handleLogInCheck = async (event) => {
    event.preventDefault();

    // console.log(form)
    logInCheck();
  };

  const logInCheck = () => {
    alldata.forEach((element) => {
      if (element.username == form.username) {
        console.log("brukernavnet er der");
        if (element.password == form.password) {
          console.log("Passord er også riktig");
          // console.log(element)
          setSelectedUser(element);
          setUserAsLoggedIn();
          //   router.reload()
        } else {
          alert("Passord er feil");
        }
      }
    });
  };

  const setUserAsLoggedIn = () => {
    makeAdmin();
    router.reload();
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
          <button type="submit">TEST LOGG INN</button>
        </form>
      </section>
      <section>
        <p>Test verdier</p>
        <p>Brukernavn: admin </p>
        <p>Passord: admin</p>
      </section>
    </>
  );
};

export default LogIn;
