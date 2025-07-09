export const getUsers = () => {
  return localStorage.getItem("users") || [];
};

export const saveUser = (user) => {
  localStorage.setItem("users", JSON.stringify(user));
};

export const setToken = () => {
  localStorage.setItem("token", "LOGGED_IN");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
