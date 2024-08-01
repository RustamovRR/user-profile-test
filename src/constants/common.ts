import { IUser } from "@types";

export const URL = "http://localhost:5173";
export const COUNTRIES_API = "https://freetestapi.com/api/v1/countries";

export const INITIAL_USER_DATA: IUser = {
  id: "1",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  username: "janedoe",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  bio: "Frontend Developer at TechCorp",
  country: "Uzbekistan",
  city: "Tashkent",
  address: "Yakkasaray, Nukus street, 11",
};