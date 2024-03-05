import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground, backgroundKey }: BackgroundProps) => {
  function backgroundSwitch(backgroundkey: string | undefined) {
    switch (backgroundKey) {
      case 'about':
        return 'bg-about bg-no-repeat bg-cover bg-center bg-fixed';
      case 'art':
        return 'bg-art bg-no-repeat bg-cover bg-center bg-fixed';
      case 'code':
        return 'bg-code bg-no-repeat bg-cover bg-center bg-fixed';
      case 'home':
        return 'bg-home bg-no-repeat bg-cover bg-center bg-fixed bg-opacity-25';
      default:
        'bg-home bg-no-repeat bg-cover bg-center bg-fixed';
    }
  }

  const background = backgroundSwitch(backgroundKey);
  return <div className={`absolute inset-0 ${hasBackground ? background : 'bg-transparent'}`}>{children}</div>;
};

export default Background;
