import { useState } from "react";

const Form = (props) => {
  const [newTask, setNewTask] = useState("");

  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask) {
      props.onFormSubmit(newTask);
    }
    setNewTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="taskInput"
        placeholder="Enter task"
        value={newTask}
        onChange={changeHandler}
      />
      <button type="submit">Enter Task</button>
    </form>
  );
};

export default Form;
