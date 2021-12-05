import NavComponent from "./NavComponent"
import { useState } from "react";
import Link from 'next/link'
import {store, useGlobalState} from 'state-pool';
import { useAllAnnonser } from "../hooks/useAllAnnonser"

store.setState("stateUser", false);
store.setState("user", []);
store.setState("visAlt", []);
store.setState("nye", []);
store.setState("visNye", false);


const Nav = () =>{

    const [alt, setAlt] = useGlobalState("visAlt");
    const [nye, setNye] = useGlobalState("nye");
    const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
    const [user, setUser] = useGlobalState("user");

    const [seaching, setSearching] = useState()

    const searchField = (event) =>{
        console.log(event.currentTarget.value)
    }
  
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
        <li><input type="text" onChange={searchField} placeholder="Søkefelt" /></li>
        {loggedInState ? 
        (<li><Link href={`/dashboard/`+ user.username}>{user.username}</Link></li>)
         :
         (<li><Link href={`/user/login`} >Login</Link></li>)}
        </ul>
        </>
    )
}

export default Nav