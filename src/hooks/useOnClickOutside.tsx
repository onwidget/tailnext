import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

export function useOnClickOutside(ref: RefObject<any>, handler: (event: AnyEvent) => void) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
