import Image from 'next/image';

import noResult from '~/assets/images/no-result-dark.svg';
import CTA from '../common/CTA';

type TNoResult = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
};

const NoResult: React.FC<TNoResult> = ({ title, description, link, linkTitle }) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src={noResult}
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src={noResult}
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">{description}</p>

      <CTA
        data={{
          text: linkTitle,
          href: link,
          btnType: 'primary',
        }}
        class='class="m-1 md:px-6" px-5 py-2 text-sm font-semibold shadow-none'
      />
    </div>
  );
};

export default NoResult;
