import { useRouter } from "next/router";

const Betaling = () => {
  const router = useRouter();

  //  Gå videre btn. Går bare til forsiden etter at det har blitt betalt.
  const handleNextBtn = () => {
    router.push("/");
  };

  return (
    <>
      <section>
        <h2>Her skulle det ha vært betalingsside</h2>
        <p>Eller den tjenesten man skulle ha brukt til slikt</p>
        <button onClick={handleNextBtn}>Gå videre</button>
      </section>
    </>
  );
};

export default Betaling;
