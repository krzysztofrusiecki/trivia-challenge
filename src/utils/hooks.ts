import { useState, useEffect, useRef, RefObject } from 'react';

export const useComponentVisible = (): {
  ref: RefObject<HTMLDivElement>;
  isComponentVisible: boolean;
  setIsComponentVisible: (param: boolean) => void;
} => {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: any) => {
    if (ref.current) {
      if (!ref.current?.contains(event.target)) {
        setIsComponentVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};
