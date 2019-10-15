import { useEffect, useState, useRef } from "react";

export const useFetch = (url: any) => {
  const [state, setState] = useState({ data: "", loading: true });
  const isCurrent = useRef(true);
  useEffect(() => {
    // called when component is going to unmount
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: state.data, loading: true });

    fetch(url)
      .then(x => x.text())
      .then(y =>
        setTimeout(() => {
          if (isCurrent.current) setState({ data: y, loading: true });
        }, 2000)
      );
  }, [url, setState]);

  return state;
};
