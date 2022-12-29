import Image from 'next/image';

import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';

const SocialProof = () => (
  <section>
    <div className="m-auto max-w-3xl py-12">
      <div className="flex justify-center gap-6 md:gap-9">
        <div>
          <Image
            src={nextJsLogo}
            alt="NextJs Logo"
            className="w-12 opacity-50 contrast-0 grayscale md:w-16"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div>
          <Image
            src={reactLogo}
            alt="React Logo"
            className="w-12 opacity-50 contrast-0 grayscale md:w-16"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div>
          <Image
            src={tailwindCssLogo}
            alt="Tailwind CSS Logo"
            className="w-12 opacity-50 contrast-0 grayscale md:w-16"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div>
          <Image
            src={typescriptLogo}
            alt="Typescript Logo"
            className="w-12 opacity-50 grayscale md:w-16"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
