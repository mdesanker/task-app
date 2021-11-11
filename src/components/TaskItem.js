import { useState } from "react";

import "./TaskItem.css";

const TaskItem = (props) => {
  const [editedTask, setEditedTask] = useState("");
  const [editVisible, setEditVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const deleteClickHandler = () => {
    props.onDelete(props.info.id);
  };

  const editClickHandler = () => {
    setEditVisible(true);
  };

  const editCompleteHandler = () => {
    setIsComplete(isComplete ? false : true);
  };

  const changeHandler = (e) => {
    setEditedTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editedTask) {
      props.onEdit(props.info.id, editedTask);
      setEditVisible(false);
      setEditedTask("");
    }
  };

  if (editVisible) {
    return (
      <li>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="editedTask"
            value={editedTask}
            onChange={changeHandler}
          />
          <button type="submit">Resubmit</button>
        </form>
      </li>
    );
  }

  return (
    <li className={`${isComplete ? "complete" : ""}`}>
      <div>
        <span onClick={editCompleteHandler}>{props.info.text}</span>
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
