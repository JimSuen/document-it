import axios from "axios";
const serverUrl = "http://localhost:3333/";

export async function getMarkdown() {
  return axios.get("/");
}

export async function setMarkdown(value: string) {
  return axios.post(
    `/api/update`,
    { content: value },
    { headers: { "Content-Type": "application/json;charset=utf-8" } }
  );
}
