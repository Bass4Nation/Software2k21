import { useRouter } from "next/dist/client/router"

const login = () =>{
    const router = useRouter()


    const handleLogInBtn = () =>{
        router.push('/dashboard/admin')
    }
return(
    <>
    <section>
        <p>Brukernavn</p>
        <input value="admin"></input>
        <p>Passord</p>
        <input value="admin"></input>
        <button onClick={handleLogInBtn}>Logg inn</button>
    </section>
    </>
)
}

export default login