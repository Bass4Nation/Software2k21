import { useRouter } from "next/dist/client/router";
import { useGlobalState } from "state-pool";


const Dashboard = () => {
    const router = useRouter();
  
    // ------ Global variabel for brukeren som er innlogget
    const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
    const [user, setUser] = useGlobalState("user");

    console.log(user.userannonser)
  
  
    const handleShowAllBtn = () => {
      router.push("/dashboard/view");
    };
    const handleCreateBtn = () => {
      router.push("/dashboard/create");
    };
      const handleLogOutBtn = () => {
      setLoggedInState(false)
      setUser([])
      router.push("/");
    };
  
    return (
      <>
        <p>Her kommer bruker siden til å være</p>
        <button onClick={handleShowAllBtn}>Mine Annonser</button>
        <button onClick={handleCreateBtn}>Lag annonse</button>
        <button onClick={handleLogOutBtn}>Logg ut</button>
      </>
    );
}

export default Dashboard