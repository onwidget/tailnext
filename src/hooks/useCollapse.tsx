import { useState } from 'react';

const useCollapse = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined);

  const handleSetIndex = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setToggle(!toggle);
    } else {
      setActiveIndex(undefined);
      setToggle(!toggle);
    }
  };

  return {
    activeIndex,
    handleSetIndex,
  };
};

export default useCollapse;
