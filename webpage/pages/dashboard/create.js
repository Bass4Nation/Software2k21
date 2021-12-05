import { postAnnonse } from "../../lib/api/postAnnonse";
import { useState } from "react";
import { useAllAnnonser } from "../../hooks/useAllAnnonser";

const creatingAnnonse = () => {
  const {allannonser} = useAllAnnonser()


  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [beskrivelse, setbeskrivelse] = useState()
  const [kjopnu, setKjopNu] = useState()
  const [startbud, setStartBud] = useState()
  const [bildeId, setBildeId] = useState()
  var sisteId = allannonser[allannonser.length - 1]?.id +1

  const handleTittleChange = (e) => {
    setTitle(e.currentTarget.value)
  }
  const handleDescChange = (e) => {
    setbeskrivelse(e.currentTarget.value)
  }
  const handleBuyNowChange = (e) => {
    setKjopNu(e.currentTarget.value)
  }
  const handleBidChange = (e) => {
    setStartBud(e.currentTarget.value)
  }

  const sendAnnonse = async () =>{
    setId(sisteId)
    postAnnonse(id, title, beskrivelse, kjopnu, startbud)

  }



  return (
    <>
      <section>
        <p>Tittel: </p> <input type="text" placeholder="tittel" onChange={handleTittleChange}></input>
        <p>Beskrivelse: </p> <input type="text" placeholder="beskrivelse" onChange={handleDescChange}></input>
        <p>Pris, kjøp nå: </p> <input type="number" placeholder="pris" onChange={handleBuyNowChange}></input>
        <p>Pris, start bud: </p> <input type="number" placeholder="start bud" onChange={handleBidChange}></input>
        <p>Last opp bilde</p> <button >Last opp</button>
      </section>
      <section>
        <button onClick={sendAnnonse}>Legg ut</button>
      </section>
    </>
  )
}

export default creatingAnnonse;
