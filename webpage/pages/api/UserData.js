

const userdata = [
    {
        id: '0',
        username: 'admin',
        password: 'admin',
        userannonser: [
            {
                tittel: 'tittelen for admin sin første annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837
            },
            {
                tittel: 'tittelen for admin sin andre annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
            {
                tittel: 'tittelen for admin sin tredje annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
            {
                tittel: 'tittelen for admin sin fjerde annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
        ],
    },
    {
        id: '1',
        username: 'gruppe17',
        password: 'gruppe17',
        userannonser: [
            {
                tittel: 'tittelen for gruppe17 sin første annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
            {
                tittel: 'tittelen for gruppe17 sin første annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
            {
                tittel: 'tittelen for gruppe17 sin første annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
            {
                tittel: 'tittelen for gruppe17 sin første annonse',
                beskrivelse: 'oasfnfoiasnfoiasnfasoind',
                kjopnu: 1000,
                startbud: 100,
                bildeid: 12837            },
        ],
    },
]

export default function handler(req, res) {
    if (req.method === 'POST') {
        // tar i mot data som sendes med forespørselen
        const data = req.body

        // undersøke om request body har key = question
        if (!data?.question) {
            // hvis ikke returner 400 Bad Request
            // sender med feilmelding som vi kan bruke (error: ...)
            res
                .status(400)
                .json({ success: false, error: 'Fyll ut all nødvendig data' })
        } else {
            // legger til data i quiz listen vår
            quiz.push(data)

            // sender status 201 (Created) og den nye oppdaterte listen
            res.status(201).json({ success: true, data: quiz })
        }
    } else if (req.method === 'PUT') {
        // sender status 405 => metoden er ikke lov
        res.status(405).end()
    } else {
        // håndterer alle andre responser
        res.status(200).json({ success: true, data: quiz })

    }