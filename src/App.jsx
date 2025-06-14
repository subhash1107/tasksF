import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./api/taskApi.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const handleCreateOrUpdate = async (task) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, task);
        setEditingTask(null);
      } else {
        await createTask(task);
      }
      fetchTasks();
    } catch (err) {
      console.error("Error saving task", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleCreateOrUpdate} editingTask={editingTask} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;