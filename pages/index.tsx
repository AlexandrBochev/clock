import Head from 'next/head'
import Clock from '../components/clock/Clock'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clock</title>
        <meta name="description" content="Clock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clock />
    </div>
  )
}
