import { useEffect, useState } from "react";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../api/taskApi.js";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";
import EditModal from "../components/EditModal.jsx";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.name);
      setDescription(editingTask.description || "");
    }
  }, [editingTask]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateTask(editingTask.id, { name: title, description });
      fetchTasks();
      setEditingTask(null);
    } catch (error) {
      console.error("Error in Updating task: ", error);
    }
  };

  const handleCreate = async (task) => {
    try {
      await createTask(task);
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
        <TaskForm onSubmit={handleCreate} />
        <TaskList
          tasks={tasks}
          onEdit={(task) => setEditingTask(task)}
          onDelete={handleDelete}
        />
      </div>

      <EditModal
        show={!!editingTask}
        onClose={() => setEditingTask(null)}
        onUpdate={handleUpdate}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export default TaskPage;
