import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentB() {
  const user = useContext(UserContext);

  return <h2>{`Bye ${user}`}</h2>;
}

export default ComponentB;
