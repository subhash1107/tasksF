import { useState} from "react";
import Button from "./Button";

const TaskForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return alert("All fields required");
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex gap-3 w-full justify-between mb-2">
      <input
      className='px-4 py-2 rounded-md border w-[73%] bg-white'
      type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <Button className='px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 ' type="submit">Add Task</Button>
      </div>
      <input
      className='px-4 py-2 rounded-md border w-full mb-2 bg-white'
      type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
    </form>
  );
};

export default TaskForm;
