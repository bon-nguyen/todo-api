import { useEffect, useRef } from "react";

type Event = MouseEvent | TouchEvent;


const useOnClickOutside = (handler: (event: Event) => void ) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const listener = (event: Event) => {
      if (!domRef?.current || domRef?.current.contains(event.target as Node)) {
        return;
      }

      handler(event);

    };
    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [handler]); // Reload only if ref or handler changes
  return domRef;
};

export default useOnClickOutside;
