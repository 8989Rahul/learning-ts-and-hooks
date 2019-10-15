import React, { useState, useRef } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { ShowHello } from "./ShowHello";
// import { useFetch } from "./useFetch";

const App: React.FC = () => {
  const [values, setValues] = useForm({ email: "", password: "" });
  const inputRef = useRef(null);
  const hello = useRef(() => console.log("hello"));
  const [showHello, setShowHello] = useState(true);

  return (
    <div className="App">
      <input
        ref={inputRef.current}
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

      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      <button
        onClick={() => {
          hello.current();
        }}
      >
        Focus
      </button>
      {showHello && <ShowHello />}
    </div>
  );
};

export default App;
