import Header from "~/components/widgets/Header";
import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Announcement from "~/components/widgets/Announcement";
import Steps from "~/components/widgets/Steps";
import Features2 from "~/components/widgets/Features2";
import SocialProof from "../src/components/widgets/SocialProof";

export default function Page() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Features2 />
        <Steps />
      </main>
    </>
  );
}
