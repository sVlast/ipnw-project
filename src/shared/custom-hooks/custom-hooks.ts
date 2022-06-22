import { useEffect, useLayoutEffect, useRef } from 'react';

export const useClickOutside = (handler: {
  (): void;
}): React.MutableRefObject<HTMLElement> => {
  const domNode = useRef<HTMLElement>(null);

  useEffect(() => {
    const conditionalHandler = (e: any) => {
      if (e && domNode && !domNode.current?.contains(e?.target)) handler();
    };

    document.addEventListener('click', conditionalHandler, { capture: true });

    return () => {
      document.removeEventListener('click', conditionalHandler, {
        capture: true,
      });
    };
  }, [handler, domNode]);

  return domNode as React.MutableRefObject<HTMLElement>;
};

// eslint-disable-next-line
export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
