import { useState, useLayoutEffect, useRef, RefObject } from "react";
export const useMeasure = (deps: any): [any, RefObject<HTMLDivElement>] => {
  const [rect, setRect] = useState({});
  const myRef: RefObject<HTMLDivElement> = useRef(null);

  useLayoutEffect(() => {
    setRect((myRef.current && myRef.current.getBoundingClientRect()) || {});
  }, [deps]);
  return [rect, myRef];
};
