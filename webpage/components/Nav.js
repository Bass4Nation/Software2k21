import NavComponent from "./NavComponent"
import { useState } from "react";
import Link from 'next/link'
import {store, useGlobalState} from 'state-pool';
import { useAllAnnonser } from "../hooks/useAllAnnonser"

//---------- Her lages de globale variablene -----------
store.setState("stateUser", false);
store.setState("user", []);
store.setState("visAlt", []);
store.setState("nye", []);
store.setState("visNye", false);
// -------------------------------------

const Nav = () =>{

    // ----- Globale variabler -----------------
    const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
    const [user, setUser] = useGlobalState("user");
//  -------- useState Søkefelt ------------
    const [seaching, setSearching] = useState()

    //---------- Custom hook for å få alle annonser---------
    // Må kjøres her for at den globale variabelen visAlt skal få inn data
    const {allAnnonser} = useAllAnnonser()

    const searchField = (event) =>{
        console.log(event.currentTarget.value)
    }
  
    // ------ array for hva som skal bli vist i navigasjonen
    const navElements = [
        {link: '/', lable: 'Show all'},
        // {link: 'link adresse', lable: 'nav tab title'},
    ]

    // -------- .map på listen over og viser de som et NavComponet på siden. ------------
    const navList = navElements.map((single) => (
        <NavComponent key={single.lable} data={single}/>
    ))

    return(
        <>
        <ul>
            {/* Legger ut listen navElements her */}
        {navList}
        {/* Søkefeltet */}
        <li><input type="text" onChange={searchField} placeholder="Søkefelt" /></li>
        {/* Viss man er logget inn så skal det ikke stå at man er innlogget. Men heller stå brukernavnet til brukeren i navigasjonsfeltet */}
        {/* Så viss loggedInState er true så viser siden brukernavnet */}
        {/* Viss false så viser den Login */}
        {loggedInState ? 
        (<li><Link href={`/dashboard/`+ user.username}>{user.username}</Link></li>)
         :
         (<li><Link href={`/user/login`} >Login</Link></li>)}
        </ul>
        </>
    )
}

export default Nav