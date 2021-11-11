import { useState } from "react";
import TaskList from "./components/TaskList";
import uniqid from "uniqid";

const STARTER_TASK_LIST = [
  { text: "Task 1", id: uniqid() },
  { text: "Task 2", id: uniqid() },
  { text: "Task 3", id: uniqid() },
  { text: "Task 4", id: uniqid() },
];

const App = () => {
  const [taskList, setTaskList] = useState(STARTER_TASK_LIST);
  const [newTask, setNewTask] = useState("");

  const inputChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newTask) {
      setTaskList((prevState) => {
        return [{ text: newTask, id: uniqid() }, ...prevState];
      });
      setNewTask("");
    }
  };

  const taskDeleteHandler = (taskId) => {
    setTaskList((prevState) => {
      return prevState.filter((task) => task.id !== taskId);
    });
  };

  const taskEditHandler = (taskId, newTaskText) => {
    setTaskList((prevState) => {
      return prevState.map((task) => {
        if (task.id === taskId) {
          return { text: newTaskText, id: taskId };
        } else return task;
      });
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          id="taskInput"
          placeholder="Enter task"
          value={newTask}
          onChange={inputChangeHandler}
        />
        <button type="submit">Enter Task</button>
      </form>
      <TaskList
        tasks={taskList}
        onTaskDelete={taskDeleteHandler}
        onTaskEdit={taskEditHandler}
      />
    </div>
  );
};

export default App;
