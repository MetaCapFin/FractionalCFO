import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fractional CFO by XYZ</title>
        <meta name="description" content="Fractional CFO services tailored for contractors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>LOGO HERE</div>
        <h1 className={styles.title}>FRACTIONAL CFO by XYZ</h1>
      </header>

      <main className={styles.main}>
        <p>Welcome to our Fractional CFO service tailored for contractors.</p>
      </main>
    </div>
  );
}
