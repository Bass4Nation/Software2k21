import { useRouter } from "next/dist/client/router";
import { useGlobalState } from "state-pool";
import NotShow from "./NotShow";

const Dashboard = () => {
  const router = useRouter();

  // ------ Global variabel for brukeren som er innlogget
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [user, setUser] = useGlobalState("user");

  // ---------- Knapp for vis alle brukerens annonser --------------
  const handleShowAllBtn = () => {
    router.push("/dashboard/view");
  };
  // ---------- Knapp for å lage en annonse -----------------
  const handleCreateBtn = () => {
    router.push("/dashboard/create");
  };
  //  ----------- Knapp for å logge ut av siden ----------------
  const handleLogOutBtn = () => {
    // setter globale variabelen til false
    setLoggedInState(false);
    // Global variabel for brukeren blir tømt.
    setUser([]);
    router.push("/");
  };

  return (
    <>
      {/* Viser bare siden om man er innlogget */}
      {loggedInState ? (
        <section>
          <h2>Dashboard siden</h2>
          <button onClick={handleShowAllBtn}>Mine Annonser</button>
          <button onClick={handleCreateBtn}>Lag annonse</button>
          <button onClick={handleLogOutBtn}>Logg ut</button>
        </section>
      ) : (
        <NotShow />
      )}
      {/* Viser ikke siden om man ikke er innlogget. Så bruker NotShow */}
    </>
  );
};

export default Dashboard;
