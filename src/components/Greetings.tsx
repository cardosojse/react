import { useContext } from "react";
import { ThemeContext } from "./UseContext";

const Greetings = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        backgroundColor: theme == "light" ? "#eee" : "#333",
        color: theme == "dark" ? "#eee" : "#333",
      }}
    >
        <h2>Hello, World!</h2>
    </div>
  );
};

export default Greetings;