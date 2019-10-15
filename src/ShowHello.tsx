import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";
let num = localStorage.getItem("count");

export const ShowHello = () => {
  const render = useRef(0);
  const [count, setCount] = useState(() => JSON.parse(num ? num : "0"));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  console.log("render", render.current++);

  return (
    <div>
      <p>{!data ? "Loangin..." : data}</p>
      <h2>{count}</h2>
      <button onClick={() => setCount((c: any) => c + 1)}>Increament</button>
    </div>
  );
};
