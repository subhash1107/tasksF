import { useEffect } from "react";
import { useState } from "react";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../api/taskApi.js";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

const TaskPage = () => {
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
    <div className="min-h-screen justify-center items-center flex flex-col">
      <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md max-h-[90vh] overflow-auto">
        <h1 className="mb-6 font-bold text-2xl">Add New Task</h1>
        <TaskForm onSubmit={handleCreateOrUpdate} editingTask={editingTask} />
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TaskPage;
