import { IUser } from "@types";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const saveUserDataToStorage = (body: IUser) => {
  localStorage.setItem("user_data", JSON.stringify(body));
};

export const getUserDataFromStorage = () => {
  const data = localStorage.getItem("user_data");
  return JSON.parse(data!) as IUser;
};
