const userdata = [
  {
    id: "0",
    username: "admin",
    password: "admin",
    userannonser: [
      {
        id: 1,
        tittel: "Gammel Telefon",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 5000,
        startbud: 100,
        bildeid: 12837,
      },
      {
        id: 2,
        tittel: "Klassisk Sofa",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 10000,
        startbud: 100,
        bildeid: 12838,
      },
      {
        id: 3,
        tittel: "Kiste fra langt tilbake",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12839,
      },
      {
        id: 4,
        tittel: "Kamera",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12840,
      },
    ],
  },
  {
    id: "1",
    username: "gruppe17",
    password: "gruppe17",
    userannonser: [
      {
        id: 5,
        tittel: "Aladdins lampe",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12841,
      },
      {
        id: 6,
        tittel: "Spesielt design kniv",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12842,
      },
      {
        id: 7,
        tittel: "Gammelt lommeur",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12843,
      },
      {
        id: 8,
        tittel: "Strykejern",
        beskrivelse: "oasfnfoiasnfoiasnfasoind",
        kjopnu: 1000,
        startbud: 100,
        bildeid: 12844,
      },
    ],
  },
];

// API funksjonene
export default function handler(req, res) {
  if (req.method === "POST") {
    // tar i mot data som sendes med forespørselen
    const data = req.body;

    // undersøke om request body har key = question
    if (!data?.question) {
      // hvis ikke returner 400 Bad Request
      // sender med feilmelding som vi kan bruke (error: ...)
      res
        .status(400)
        .json({ success: false, error: "Fyll ut all nødvendig data" });
    } else {
      // legger til data i quiz listen vår
      userdata.push(data);

      // sender status 201 (Created) og den nye oppdaterte listen
      res.status(201).json({ success: true, data: userdata });
    }
  } else if (req.method === "PUT") {
    // sender status 405 => metoden er ikke lov
    res.status(405).end();
  } else {
    // håndterer alle andre responser
    res.status(200).json({ success: true, data: userdata });
  }
}
