import Nav from "../components/Nav";

const Layout = ({ children }) => {
  // Denne filen skal wrappe rundt alt annet som blir plassert i mellom.
  return (
    <>
      <section>
        <h1 className="HeadTitle">Norges antikviteter og samlerobjekt side</h1>
      </section>
      {/* Nav blir brukt her. */}
      <Nav />
{/* Alle andre siden blir plassert på children plassen */}
      <main>{children}</main>
      <footer>
        <p>Laget av</p>
        <p>Gruppe 17</p>
      </footer>
    </>
  );
};

export default Layout;
