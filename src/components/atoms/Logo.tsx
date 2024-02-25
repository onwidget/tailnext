import Image from 'next/image';

import toniaLogo from '~/assets/images/tg_logo.svg';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image src={toniaLogo} width="40" height="40" alt="logo"/>
  </span>
);

export default Logo;
