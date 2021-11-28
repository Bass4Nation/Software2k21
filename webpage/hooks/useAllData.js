
import { useEffect, useState } from 'react'
import axios from 'axios'



export const useAllData = () => {
    const [alldata, setAllData] = useState({})

    useEffect(() => {
        const getAllData = async () => {
            try {
                // GET-request til /api/quiz
                const response = await axios.get('/api/userdata')
    
                console.log(response)
    
                // response.data kommer fra axios
                // success er noe som jeg har laget i responsen
                if (response?.data?.success) {
                    // oppdaterer state med data fra API
                    setAllData(response.data.data)
                }
            } catch (error) {
                // console.log av feilen
                console.log(error?.response?.data)
            }
        }
        // trigger henting av data når komponenten lages
    getAllData()
    }, [alldata])

    return {alldata}
}