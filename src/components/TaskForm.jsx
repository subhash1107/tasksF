import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return alert("All fields required");
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">{editingTask ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;