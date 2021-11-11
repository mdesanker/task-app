const TaskItem = (props) => {
  const deleteClickHandler = () => {};

  return (
    <li>
      {props.info.text}
      <button onClick={deleteClickHandler}>Delete</button>
    </li>
  );
};

export default TaskItem;
