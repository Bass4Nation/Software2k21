import axios from 'axios'
import { useState } from "react";
import { useAllAnnonser } from "../hooks/useAllAnnonser";
import { useGlobalState } from "state-pool";
import { useRouter } from 'next/router'
import NotShow from './NotShow';
import { generateRandomId } from '../lib/utils/randId';


const CreateAnnonse = () => {
  const router = useRouter()
  const {allannonser} = useAllAnnonser()
  const [user, setUser] = useGlobalState("user");
  const [loggedInState, setLoggedInState] = useGlobalState("stateUser");
  const [alt, setAlt] = useGlobalState("visAlt");
  const [nye, setNye] = useGlobalState("nye");
  const [visNye, setVisNye] = useGlobalState("visNye");





  const [form, setForm] = useState({
    id: generateRandomId(),
    tittel: '',
    beskrivelse: '',
    kjopnu: '',
    startbud: '',
    bildeid: 12840
   })

   const handleInputOnChange = ({ currentTarget: { name, value } }) =>
   setForm((state) => ({ ...state, [name]: value }))



  const handleSendSupport = async (event) =>{
    event.preventDefault()
    try {
      postFormAnnonse()
       router.push('/dashboard/view')
    } catch (err) {
      console.log(err)
    }

  }

  const postFormAnnonse = () => {
    nye.push(form)
    setVisNye(true)
    user?.userannonser.push(form)
  }


  return (
    <>{loggedInState ? 

    
      <form onSubmit={handleSendSupport}>
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
    </>
  )
}

export default CreateAnnonse;
