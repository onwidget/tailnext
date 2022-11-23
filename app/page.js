import Header from "~/components/widgets/Header";
import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Banner from "../src/components/widgets/Banner";

export default function Page() {
  return (
    <>
      <Banner />
      <Header />

      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
