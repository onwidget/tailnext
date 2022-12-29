import Header from "~/components/widgets/Header";
import Hero from "~/components/widgets/Hero";
import Features3 from "~/components/widgets/Features3";
import Announcement from "~/components/widgets/Announcement";
import Steps from "~/components/widgets/Steps";
import Features2 from "~/components/widgets/Features2";
import SocialProof from "../src/components/widgets/SocialProof";
import Testimonial from "~/components/widgets/Testimonial";
import FAQs from "~/components/widgets/FAQs";
import Pricing from "~/components/widgets/Pricing";
import CallToAction from "~/components/widgets/CallToAction";
import Footer from "~/components/widgets/Footer";

export default function Page() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features3 />
        <Features2 />
        <Steps />
        <Testimonial />
        <FAQs />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}