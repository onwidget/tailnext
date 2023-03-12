import { useEffect, useState } from 'react';
import { WindowSize } from '~/shared/types';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
