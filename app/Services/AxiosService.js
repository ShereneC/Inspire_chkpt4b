// @ts-ignore
export const tasksApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/sherene/todos",
  timeout: 10000
});
// @ts-ignore
export const sandbox = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})
