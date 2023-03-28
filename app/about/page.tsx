import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import { featuresData3, hero2Data } from '~/shared/data';

const Page = () => {
  return (
    <>
      <Hero2 data={hero2Data} />
      <Features4 {...featuresData3} />
    </>
  );
};

export default Page;
