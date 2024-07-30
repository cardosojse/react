import { useState } from "react";

function MyComponent() {
  const [tasks, setTask] = useState(["Teste"]);

  function addTask() {
    const inputElement = document.getElementById(
      "task-input"
    ) as HTMLInputElement;
    const newTask = inputElement.value;
    inputElement.value = "";
    setTask((prevTask) => [...prevTask, newTask]);
  }

  function removeTask(index: number) {
    setTask(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Task list</h2>
      <input type="text" id="task-input" placeholder="Type your task" />
      <button onClick={addTask}>Add task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <span onClick={() => removeTask(index)}>X</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyComponent;
