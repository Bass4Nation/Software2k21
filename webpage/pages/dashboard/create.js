import { postAnnonse } from "../../lib/api/postAnnonse";
import { useState } from "react";
import { useAllAnnonser } from "../../hooks/useAllAnnonser";

const creatingAnnonse = () => {
  const {allannonser} = useAllAnnonser()

  const [form, setForm] = useState({
    id: null,
    title: '',
    description: '',
    kjopnu: null,
    startbud: null,
    bildeId: 12840
   })

   const handleInputOnChange = ({ currentTarget: { name, value } }) =>
   setForm((state) => ({ ...state, [name]: value }))


  const [id, setId] = useState()

  var sisteId = allannonser[allannonser.length - 1]?.id +1



  const handleSendSupport = async (event) =>{
    event.preventDefault()
    sisteId
    form.id = sisteId
    postAnnonse(form)
  }


  // <form onSubmit={handleSendSupport}>
  // <label htmlFor="title">Tittel :</label>
  //   <input type="text" placeholder="tittel" value={form.title} onChange={handleInputOnChange}></input>
  //   <label htmlFor="description">Beskrivelse:  </label>
  //   <input type="text" placeholder="beskrivelse" value={form.description} onChange={handleInputOnChange}></input>
  //   <label htmlFor="kjopnu">Pris, kjøp nå:  </label>
  //   <input type="number" placeholder="pris" value={form.kjopnu} onChange={handleInputOnChange}></input>
  //   <label htmlFor="startbud">Pris, startbud:  </label>
  //   <input type="number" placeholder="start bud" value={form.startbud} onChange={handleInputOnChange}></input>
  //   <p>Last opp bilde</p> <button >Last opp</button>
  //   <button type="submit">Legg ut</button>


  return (
    <>
      <form onSubmit={handleSendSupport}>
        <p>Tittel: </p> 
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputOnChange}
          value={form.title}
        />
        <p>Beskrivelse: </p> 
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleInputOnChange}
          value={form.description}
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
    </>
  )
}

export default creatingAnnonse;
