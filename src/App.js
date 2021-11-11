import { useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div>
      <form>
        <label htmlFor="taskInput">Enter task</label>
        <input type="text" id="taskInput" />
        <button type="submit">Enter Task</button>
      </form>
      <TaskList />
    </div>
  );
};

export default App;
