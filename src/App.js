import { useState } from "react";
import TaskList from "./components/TaskList";
import uniqid from "uniqid";

const App = () => {
  const [taskList, setTaskList] = useState([
    { text: "Task 1", id: uniqid() },
    { text: "Task 2", id: uniqid() },
    { text: "Task 3", id: uniqid() },
    { text: "Task 4", id: uniqid() },
  ]);

  const [newTask, setNewTask] = useState("");

  const inputChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTaskList((prevState) => {
      return [{ text: newTask, id: uniqid() }, ...prevState];
    });
    setNewTask("");
  };

  const taskDeleteHandler = (taskId) => {
    setTaskList((prevState) => {
      return prevState.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          type="text"
          id="taskInput"
          value={newTask}
          onChange={inputChangeHandler}
        />
        <button type="submit">Enter Task</button>
      </form>
      <TaskList tasks={taskList} onTaskDelete={taskDeleteHandler} />
    </div>
  );
};

export default App;
