import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import { featuresData2 } from '~/shared/data';

const Page = () => {
  return (
    <>
      <Contact2 />
      <Features2 {...featuresData2} />
    </>
  );
};

export default Page;
