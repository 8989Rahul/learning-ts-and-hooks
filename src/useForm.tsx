import { useRef } from "react";

export const useForm = () => {
  const render = useRef(0);
  console.log("render", render.current++);
};

// import { useState } from "react";

// export const useForm = (initialValues: any) => {
//   const [values, setValues] = useState(initialValues);
//   return [
//     values,
//     (e: any) => {
//       setValues({
//         ...values,
//         [e.target.name]: e.target.value
//       });
//     }
//   ];
// };
