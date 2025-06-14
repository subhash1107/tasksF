import axiosInstance from "./axiosInstance.js";

export const getTasks = async () => {
  const response = await axiosInstance.get("/tasks");
  return response.data.data;
};

export const createTask = async (task) => {
  const response = await axiosInstance.post("/tasks", task);
  return response.data.data;
};

export const updateTask = async (id, updatedTask) => {
  const response = await axiosInstance.put(`/tasks/${id}`, updatedTask);
  return response.data.data;
};

export const deleteTask = async (id) => {
  await axiosInstance.delete(`/tasks/${id}`);
};