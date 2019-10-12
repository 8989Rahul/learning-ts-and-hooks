import React from "react";

export const ShowHello = () => {
  React.useEffect(() => {
    console.log("renderd");
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
