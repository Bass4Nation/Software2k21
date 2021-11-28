import { useAllData } from "../../hooks/useAllData"
const viewAll = () =>{

    const {alldata} = useAllData()

    const alleAnnonser = alldata[0]?.userannonser

console.log(alleAnnonser)

    return(
        <>
        <section>
        {alleAnnonser?.map((i)=>(
            <section>
            <p>{i.tittel}</p>
            <p>{i.beskrivelse}</p>
            <p>{i.kjopnu}</p>
            <p>{i.startbud}</p>
            <p>{i.bildeid}</p>
            </section>
        ))}
        </section>
        </>
    )
}

export default viewAll