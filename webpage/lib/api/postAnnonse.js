import axios from 'axios'

export const postAnnonse = async (id, title, beskrivelse, kjopnu, startbud) => {

    let bildeId = 12840


    var data = {
        "id": id ,
        "tittel": title,
        "baskrivelse": beskrivelse,
        "kjopnu": kjopnu,
        "startbud": startbud,
        "bildeid": bildeId
        }

        var arr =   {
            id: "2",
            username: "tester",
            password: "tester",
            userannonser: [data],
        }
    
    // console.log(data)
    try {
        // POST-request til /api/userdata
        await axios.post('/api/userdata', arr)


        // response.data kommer fra axios
        // success er noe som jeg har laget i responsen
    } catch (error) {
        // console.log av feilen
        console.log(error)
    }



}