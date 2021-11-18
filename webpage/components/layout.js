import Nav from '../components/Nav'

const Layout = ({ children }) =>{


    return(
        <>
        <section>
            <h1 class="HeadTitle"> Software OPPGAVE</h1>
        </section>
        <Nav />
        <main>
            {children}
        </main>
        <footer>
            <p>Laget av</p>
            <p>Gruppe 17</p>
        </footer>
        </>
    )
}

export default Layout