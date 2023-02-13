export const storeUser = (user: User) => {
  const userStr = JSON.stringify(user);
  localStorage.setItem("user", userStr);
};

export const getUser = () => {
  const userStr = localStorage.getItem("user");

  if (!userStr) return;

  return JSON.parse(userStr) as User;
};
