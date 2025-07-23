// components/auth.js

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
export function getUserId() {
  const token = getToken();
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.userId; // assuming token has userId inside
}
export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
