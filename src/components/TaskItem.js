const TaskItem = (props) => {
  const deleteClickHandler = () => {
    props.onDelete(props.info.id);
  };

  return (
    <li>
      {props.info.text}
      <button onClick={deleteClickHandler}>Delete</button>
    </li>
  );
};

export default TaskItem;
