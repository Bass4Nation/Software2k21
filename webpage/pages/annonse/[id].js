import Annonse from "../../components/Annonse";

const uniqAnnonse = () => {
    // Bruker Annonse.js komponent fra mappen components
    // [id] er en dynamisk måte å lage en side på. [id] blir byttet ut i url med id fra Annonsen
  return (
    <>
    <Annonse />
    </>
  );
};

export default uniqAnnonse;
