import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {props.tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} info={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
