import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from "~/components/widgets/Header";
import Hero from "~/components/widgets/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TailNext</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main>
        <Hero />

        
      </main>
    </>
  )
}

export default Home
