 
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useGlobalState } from "state-pool";



 export const useAllAnnonser = () =>{
    //  Behandling av API.
    //   --------- Globale variabler ---------------
    const [alt, setAlt] = useGlobalState("visAlt");
    //  ---------- useState------------------
    const [allannonser, setAllAnnonser] = useState([])

    useEffect(() => {
        const getAllData = async () => {
            try {
                // GET-request til /api/userdata
                const response = await axios.get('/api/userdata')
        
                // response.data kommer fra axios
                // success er noe som jeg har laget i responsen
                if (response?.data?.success) {
                    let annonser = []

                    for(var i = 0; i< response.data.data.length; i++){
                         response.data.data[i].userannonser.map((k)=>{
                             annonser.push(k)
                         })

                    }
                    // console.log(annonser)
                    // oppdaterer state med data fra API
                     setAllAnnonser(annonser)
                     setAlt(annonser)
                }
            } catch (error) {
                // console.log av feilen
                console.log(error?.response?.data)
            }
        }
        // trigger henting av data når komponenten lages
    getAllData()
    }, [])

    return {allannonser}
 }