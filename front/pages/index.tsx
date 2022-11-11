import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Romain Goussu Blog & CV</title>
        <meta name="description" content="Online CV and Blog of Romain Goussu" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello world
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
