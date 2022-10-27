import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_KEY,
});
const returnData = async (method, url, value, id) => {
  const response = await api[method](url, value, id);
  const { data } = response;
  return data;
};
const AxiosService = {
  getTodos: (url) => api.get(`/todos/${url}`),
  postTodo: (value) => returnData('post', '/todos/', value),
  deleteTodo: (id) => returnData('delete', `/todos/${id}`),
  patchTodo: (id, label, isCompleted) => returnData('patch', `/todos/${id}`, label, isCompleted),
};

export default AxiosService;
