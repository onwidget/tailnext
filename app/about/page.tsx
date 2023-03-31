import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import { featuresData3, hero2Data, statsData } from '~/shared/data';

const Page = () => {
  return (
    <>
      <Hero2 data={hero2Data} />
      <Stats {...statsData} />
      <Features4 {...featuresData3} />
    </>
  );
};

export default Page;
