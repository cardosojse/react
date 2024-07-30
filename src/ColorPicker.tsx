import { useState } from "react";

type EventChanger = React.ChangeEvent<HTMLInputElement>;

function ColorPicker() {
  const [color, setColor] = useState("#fff");

  function handleColor(e: EventChanger) {
    setColor(e.target.value);
  }

  return (
    <>
      <label>
        Choose a color
        <br />
        <input type="color" onChange={handleColor} />
      </label>
      <p>
        Selected color:
        <span style={{ backgroundColor: color }}>{color}</span>
      </p>
    </>
  );
}

export default ColorPicker;
