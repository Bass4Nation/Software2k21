 
import { useEffect, useState } from 'react'
import axios from 'axios'



 export const useAllAnnonser = () =>{
    const [allannonser, setAllAnnonser] = useState([])

    useEffect(() => {
        const getAllData = async () => {
            try {
                // GET-request til /api/quiz
                const response = await axios.get('/api/userdata')
    
                //   console.log(response?.data.data[0].userannonser)
    
                // response.data kommer fra axios
                // success er noe som jeg har laget i responsen
                if (response?.data?.success) {
                    let annonser = []

                    for(var i = 0; i< response.data.data.length; i++){
                         response.data.data[i].userannonser.map((k)=>{
                             annonser.push(k)
                         })

                    }
                    console.log(annonser)
                    // oppdaterer state med data fra API
                     setAllAnnonser(annonser)
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