export const valiadteToken = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem("login-auth-token");
};

export const setToken = (token) => {
  localStorage.setItem("login-auth-token", token);
};
