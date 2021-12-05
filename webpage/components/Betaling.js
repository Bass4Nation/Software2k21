import { useRouter } from "next/router";

const Betaling = () =>{
    const router = useRouter();

    const handleNextBtn = () =>{
        router.push("/")
    }

    return(
        <>
        <section>
            <h2>Her skulle det ha vært betalingsside</h2>
            <p>Eller den tjenesten man skulle ha brukt til slikt</p>
            <button onClick={handleNextBtn}>Gå videre</button>
        </section>
        </>
    )
}

export default Betaling