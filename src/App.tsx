import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { ShowHello } from "./ShowHello";
import { useFetch } from "./useFetch";
const App: React.FC = () => {
  const [values, setValues] = useForm({ email: "", password: "" });

  // useEffect(() => {
  //   const onMouseMoved = (e: any) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMoved);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMoved);
  //   };
  // }, []);

  let num = localStorage.getItem("count");

  const [count, setCount] = useState(() => JSON.parse(num ? num : "0"));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  console.log(data, loading);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <p>{!data ? "Loangin..." : data}</p>
      <h2>{count}</h2>
      <button onClick={() => setCount((c: any) => c + 1)}>Increament</button>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={setValues}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={setValues}
      />
    </div>
  );
};

export default App;
