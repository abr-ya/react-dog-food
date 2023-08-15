const TOKEN_LOCALSTORAGE_KEY = "token";

export const getToken = (): string => localStorage.getItem(TOKEN_LOCALSTORAGE_KEY) || "";

export const saveToken = (token: string): void => {
  console.log("saveToken");
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, `Bearer ${token}`);
};
