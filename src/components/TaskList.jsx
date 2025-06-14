import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <strong>{task.name}</strong>: {task.description}
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;