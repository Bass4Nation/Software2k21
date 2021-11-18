import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import ShowAll from '../components/ShowAll'

export default function Home() {

  return (
    <>
    <section>
    <h2>Alle Annonser</h2>
    <ShowAll />
    </section>

    </>
  )
}
