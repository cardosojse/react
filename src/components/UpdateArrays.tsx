import { useState } from "react";

function Task() {
  const [tasks, setTask] = useState<string[]>([]);

  function addTask() {
    const inputElement = document.getElementById(
      "task-input"
    ) as HTMLInputElement;
    const newTask = inputElement.value;
    inputElement.value = "";
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
    }
  }

  function removeTask(index: number) {
    setTask(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Task list</h2>
      <input type="text" id="task-input" placeholder="Type your task" />
      <button onClick={addTask}>Add task</button>
      <div>
        <p>
          Tarefas criadas: <span>{tasks.length}</span>
        </p>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;
