import NavComponent from "./NavComponent"
import Link from 'next/link'
import { useRouter } from 'next/router'
import {store, useGlobalState} from 'state-pool';

store.setState("stateUser", false);
store.setState("user", []);

const Nav = () =>{
    const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
    const [user, setUser] = useGlobalState("user");
    const router = useRouter()

    console.log(user)
  
    const navElements = [
        {link: '/', lable: 'Show all'},
        // {link: 'link adresse', lable: 'nav tab title'},
    ]

    const navList = navElements.map((single) => (
        <NavComponent key={single.lable} data={single}/>
    ))

    return(
        <>
        <ul>
        {navList}
        <li><input type = "text" placeholder="Søkefelt" ></input></li>
        {loggedInState ? 
        (<li><Link href={`/dashboard/`+ user.username}>{user.username}</Link></li>)
         :
         (<li><Link href={`/user/login`} >Login</Link></li>)}
        </ul>
        </>
    )
}

export default Nav