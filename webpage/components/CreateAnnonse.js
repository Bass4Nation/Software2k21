import axios from 'axios'
import { useState } from "react";
import { useAllAnnonser } from "../hooks/useAllAnnonser";

const CreateAnnonse = () => {
  const {allannonser} = useAllAnnonser()

  const [form, setForm] = useState({
    id: '',
    title: '',
    description: '',
    kjopnu: '',
    startbud: '',
    bildeId: 12840
   })

   const handleInputOnChange = ({ currentTarget: { name, value } }) =>
   setForm((state) => ({ ...state, [name]: value }))


  const [id, setId] = useState()

  var sisteId = allannonser[allannonser.length - 1]?.id +1



  const handleSendSupport = async (event) =>{
    event.preventDefault()
    try {
      sisteId
      form.id = sisteId
      postFormAnnonse()
      // window.location.href = "/";
    } catch (err) {
      console.log(err)
    }

  }

  const postFormAnnonse = async () => {
    var arr =   {
      id: "2",
      username: "tester",
      password: "tester",
      userannonser: [form],
  }
    try {
      const response = await axios.post('/api/userdata/', arr)
      if(response?.data?.success){
        console.log("Data sendt inn til databasen")
        console.log(allannonser)
      }
    } catch (error) {
      console.log("ERROR:")
      console.log(error)
    }
  }




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

export default CreateAnnonse;
