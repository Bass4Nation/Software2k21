const creatingAnnonse = () => {

  // {
  //   "id":10,
  //   "tittel": "Antikk vare",
  //   "baskrivelse": "dette er en antikk vare fra gammelt tid",
  //   "kjopnu": 1000000,
  //   "startbud": 10000,
  //   "bildeid": 12844
  //   }



  return (
    <>
      <section>
        <p>Tittel: </p> <input type="text" placeholder="tittel"></input>
        <p>Beskrivelse: </p> <input type="text" placeholder="beskrivelse"></input>
        <p>Pris, kjøp nå: </p> <input type="number" placeholder="pris"></input>
        <p>Pris, start bud: </p> <input type="number" placeholder="start bud"></input>
        <p>Last opp bilde</p> <button>Last opp</button>
      </section>
      <section>
        <button>Legg ut</button>
      </section>
    </>
  );
};
export default creatingAnnonse;
