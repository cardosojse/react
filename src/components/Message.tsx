import { useContext } from "react";
import { ThemeContext } from "./UseContext";

const Message = () => {
  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: theme == "light" ? "#eee" : "#333",
        color: theme == "dark" ? "#eee" : "#333",
      }}
    >
      <h2>Current theme: {theme}</h2>
      <button onClick={() => toggleTheme()}>Toggle</button>
    </div>
  );
};

export default Message;
