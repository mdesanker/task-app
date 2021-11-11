import { useState } from "react";

const TaskItem = (props) => {
  const [editedTask, setEditedTask] = useState("");
  const [editVisible, setEditVisible] = useState(false);

  const deleteClickHandler = () => {
    props.onDelete(props.info.id);
  };

  const editClickHandler = () => {
    setEditVisible(true);
  };

  const changeHandler = (e) => {
    setEditedTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onEdit(props.info.id, editedTask);
    setEditVisible(false);
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
    <li>
      <div>
        {props.info.text}
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
