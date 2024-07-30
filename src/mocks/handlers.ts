import axios from "axios";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/posts", async () => {
    const users = await axios("https://api.github.com/users");
    return HttpResponse.json(users.data);
  }),
  http.post("/posts", () => {
    console.log('Captured a "POST /posts" request');
  }),
  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
];
