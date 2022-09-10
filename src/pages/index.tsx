import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from "~/components/widgets/Header.server";
import Hero from "~/components/widgets/Hero.server";
import Features from "~/components/widgets/Features.server";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TailNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  )
}

export default Home
