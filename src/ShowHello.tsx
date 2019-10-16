import React, { useRef } from "react";
import { useForm } from "./useForm";

export const ShowHello = React.memo(({ increment }: { increment: any }) => {
  useForm();

  return <button onClick={increment}>Hello</button>;
});

// import React, { useState, useEffect } from "react";
// import { useForm } from "./useForm";
// import { useMeasure } from "./useMeasure";
// let num = localStorage.getItem("count");

// export const ShowHello = () => {
//   const [count, setCount] = useState(() => JSON.parse(num ? num : "0"));
//   const { data } = useForm(`http://numbersapi.com/${count}/trivia`);

//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   const [rect, divRef] = useMeasure(data);

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div ref={divRef}>{!data ? "Loading..." : data}</div>
//       </div>
//       <pre>{JSON.stringify(rect, null, 2)}</pre>
//       <h2>{count}</h2>
//       <button onClick={() => setCount((c: any) => c + 1)}>Increament</button>
//     </div>
//   );
// };
