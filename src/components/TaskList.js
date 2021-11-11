import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            info={task}
            onDelete={props.onTaskDelete}
            onEdit={props.onTaskEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
