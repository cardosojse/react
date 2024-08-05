import { useEffect, useRef } from "react";

const Contador = () => {
  const ref = useRef(0);

  const increase = () => {
    ref.current++;
    console.log(ref.current);
  };

  useEffect(() => {
    console.log("Conteúdo renderizado");
  });

  return (
    <>
      <h2>{ref.current}</h2>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default Contador;
