import { useEffect, useState } from "react";

export const useFetch = (url: any) => {
  const [state, setState] = useState({ data: "", loading: true });
  useEffect(() => {
    setState({ data: state.data, loading: true });

    fetch(url)
      .then(x => x.text())
      .then(y => setState({ data: y, loading: true }));
  }, [url, setState]);

  return state;
};
