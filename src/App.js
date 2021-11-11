import { useState } from "react";
import TaskList from "./components/TaskList";
import uniqid from "uniqid";
import Form from "./components/Form";

const STARTER_TASK_LIST = [
  { text: "Task 1", id: uniqid() },
  { text: "Task 2", id: uniqid() },
  { text: "Task 3", id: uniqid() },
  { text: "Task 4", id: uniqid() },
];

const App = () => {
  const [taskList, setTaskList] = useState(STARTER_TASK_LIST);

  const formSubmitHandler = (task) => {
    setTaskList((prevState) => {
      return [{ text: task, id: uniqid() }, ...prevState];
    });
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
      <Form onFormSubmit={formSubmitHandler} />
      <TaskList
        tasks={taskList}
        onTaskDelete={taskDeleteHandler}
        onTaskEdit={taskEditHandler}
      />
    </div>
  );
};

export default App;
