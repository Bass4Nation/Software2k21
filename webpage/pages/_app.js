import '../styles/globals.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  // Lagt til en Layout som Wrapper rundt alle komponentene som blir laget. I layout er tittel, nav og footer
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
