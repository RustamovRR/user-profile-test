import { IUser } from "@types";
import { getUserDataFromStorage, saveUserDataToStorage } from "@utils";
import { http, HttpResponse } from "msw";

const userProfile = getUserDataFromStorage();

export const handlers = [
  http.get("/profile", async () => {
    return HttpResponse.json(userProfile);
  }),
  http.put("/profile", async ({ request }) => {
    const updatedProfile = (await request.json()) as IUser;
    saveUserDataToStorage({ ...userProfile, ...updatedProfile });
    return HttpResponse.json(userProfile);
  }),
];
