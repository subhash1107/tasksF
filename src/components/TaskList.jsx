import Button from "./Button";

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div className="mt-4 h-full">
    {tasks.length>0&&<h1 className="mb-6 font-bold text-2xl">Task List</h1>}
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="">
          <div className="flex justify-between">
            <strong>{task.name}</strong>
            <div className="flex gap-2">
              <Button
                className="border px-3 py-1 bg-white rounded-md hover:text-white hover:bg-green-500 hover:border-green-500"
                onClick={() => onEdit(task)}
              >
                Edit
              </Button>
              <Button
                className="border text-red-500 px-3 py-1 bg-white rounded-md hover:text-white hover:bg-red-500 hover:border-red-500"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </div>
          <p> {task.description}</p>
          <hr className="my-3 border-gray-300" />
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
