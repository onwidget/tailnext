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
            className="opacity-50 contrast-0 grayscale w-12 md:w-16 h-auto"
            width={64}
            height={64}
          />
        </div>
        <div>
          <Image
            src={reactLogo}
            alt="React Logo"
            className="opacity-50 contrast-0 grayscale w-12 md:w-16 h-auto"
            width={64}
            height={64}
          />
        </div>
        <div>
          <Image
            src={tailwindCssLogo}
            alt="Tailwind CSS Logo"
            className="opacity-50 contrast-0 grayscale w-12 md:w-16 h-auto"
            width={64}
            height={64}
          />
        </div>
        <div>
          <Image
            src={typescriptLogo}
            alt="Typescript Logo"
            className="opacity-50 grayscale w-12 md:w-16 h-auto"
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
