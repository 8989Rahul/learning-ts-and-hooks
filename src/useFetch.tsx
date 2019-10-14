import { useEffect, useState } from "react";

export const useFetch = (url: any) => {
  const [state, setState] = useState({ data: "", loading: true });
  useEffect(() => {
    setState({ data: state.data, loading: true });

    fetch(url)
      .then(x => x.text())
      .then(y =>
        setTimeout(() => {
          setState({ data: y, loading: true });
        }, 2000)
      );
  }, [url, setState]);

  return state;
};
