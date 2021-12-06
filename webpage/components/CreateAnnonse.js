import { useState } from "react";
import { useAllAnnonser } from "../hooks/useAllAnnonser";
import { useGlobalState } from "state-pool";
import { useRouter } from 'next/router'
import NotShow from './NotShow';
import { generateRandomId } from '../lib/utils/randId';


const CreateAnnonse = () => {
  const router = useRouter()
  //  ------------ Globale variabler ---------------
  const [user, setUser] = useGlobalState("user");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [alt, setAlt] = useGlobalState("visAlt");
  const [nye, setNye] = useGlobalState("nye");
  const [visNye, setVisNye] = useGlobalState("visNye");




// ----------- useState for en form som skal bli sendt inn -------------
  const [form, setForm] = useState({
    id: generateRandomId(),
    tittel: '',
    beskrivelse: '',
    kjopnu: '',
    startbud: '',
    bildeid: 12840
   })

  //  ----------------- setter inn verdier fra input felt inn i form useState --------------
   const handleInputOnChange = ({ currentTarget: { name, value } }) =>
   setForm((state) => ({ ...state, [name]: value }))

  //  ------------------------ Her sendes inn den nye annonsen -------------------------
  //  Skulle ha gått over til en database er en tredjepart tjeneste
  const handleSendAnnonse = async (event) =>{
    event.preventDefault()
    try {
      postFormAnnonse()
      // etter at annonsen er laget så går den til brukerens annonser
       router.push('/dashboard/view')
    } catch (err) {
      console.log(err)
    }
  }

  //  --------- funkjsonen for å legge inn en ny annonse --------------
  const postFormAnnonse = () => {
    nye.push(form)
    alt.push(form)
    setVisNye(true)
    user?.userannonser.push(form)
  }


  return (
    <>
    {/* Viser bare siden om brukeren er innlogget.  */}
    {loggedInState ? <form onSubmit={handleSendAnnonse}>
        <p>Tittel: </p> 
        <input
          type="text"
          id="tittel"
          name="tittel"
          onChange={handleInputOnChange}
          value={form.tittel}
        />
        <p>Beskrivelse: </p> 
        <input
          type="text"
          id="beskrivelse"
          name="beskrivelse"
          onChange={handleInputOnChange}
          value={form.beskrivelse}
        />        
        <p>Pris, kjøp nå: </p> 
        <input
          type="number"
          id="kjopnu"
          name="kjopnu"
          onChange={handleInputOnChange}
          value={form.kjopnu}
        />        
        <p>Pris, start bud: </p> 
        <input
          type="number"
          id="startbud"
          name="startbud"
          onChange={handleInputOnChange}
          value={form.startbud}
        />        
        <p>Last opp bilde</p> <button >Last opp</button>
        <button type="submit">Legg ut</button>

      </form>
    : <NotShow/>}
    {/* Prøver man å gå inn på nettsiden uten å være innlogget. Så viser den NotShow siden. */}
    </>
  )
}

export default CreateAnnonse;
