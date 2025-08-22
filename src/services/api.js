import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};