import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

const register = (user) => client.post("/users", user);
export default {
  login,
  register,
};
