import React, { useState, useCallback } from "react";
import "./App.css";
import { ShowHello } from "./ShowHello";

const App: React.FC = () => {
  let [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count++);
  }, []);

  return (
    <div className="App">
      <ShowHello increment={increment} />
      <div>{count}</div>
    </div>
  );
};

export default App;

// import React, { useState, useRef } from "react";
// import "./App.css";
// import { useForm } from "./useForm";
// import { ShowHello } from "./ShowHello";
// // import { useFetch } from "./useFetch";

// const App: React.FC = () => {
//   const [values, setValues] = useForm({ email: "", password: "" });
//   const inputRef = useRef({} as any);
//   const hello = useRef(() => console.log("hello"));
//   const [showHello, setShowHello] = useState(true);

//   return (
//     <div className="App">
//       <input
//         ref={node => (inputRef.current = node)}
//         name="email"
//         value={values.email}
//         onChange={setValues}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={setValues}
//       />

//       <button onClick={() => setShowHello(!showHello)}>Toggle</button>
//       <button
//         onClick={() => {
//           inputRef.current.focus();
//           hello.current();
//         }}
//       >
//         Focus
//       </button>
//       {showHello && <ShowHello />}
//     </div>
//   );
// };

// export default App;
