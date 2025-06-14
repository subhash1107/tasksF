import Button from "./Button";

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <strong>{task.name}</strong>: {task.description}
        <Button onClick={() => onEdit(task)}>Edit</Button>
        <Button onClick={() => onDelete(task.id)}>Delete</Button>
      </li>
    ))}
  </ul>
);

export default TaskList;