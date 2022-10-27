import Vue from 'vue';
import Vuex from 'vuex';
import AxiosService from '../utils/api';

Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
    doneTodos: (state) => state.todos.filter((todo) => todo.isCompleted),
    undoneTodos: (state) => state.todos.filter((todo) => !todo.isCompleted),
  },
  mutations: {
    getAllTodos(state, todos) {
      state.todos = todos;
    },
    addNewTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteNewTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleNewTodo(state, { index, res }) {
      state.todos = [
        ...state.todos.slice(0, index),
        res,
        ...state.todos.slice(index + 1),
      ];
    },
  },
  actions: {
    getAllTodos({ commit }) {
      AxiosService.getTodos('').then((res) => {
        commit('getAllTodos', res.data);
      });
    },
    addNewTodo({ commit }, { todo }) {
      AxiosService.postTodo({ title: todo, isCompleted: false }).then((res) => {
        commit('addNewTodo', res);
      });
    },
    deleteNewTodo({ commit }, { id }) {
      AxiosService.deleteTodo(id).then(() => {
        commit('deleteNewTodo', id);
      });
    },
    toggleNewTodo({ commit }, { id }) {
      const index = this.state.todos.findIndex((el) => el.id === id);
      const isCompleted = !this.state.todos[index].isCompleted;
      AxiosService.patchTodo(id, { isCompleted }).then((res) => {
        commit('toggleNewTodo', { index, res });
      });
    },
    updateNewTodo({ commit }, { id, title }) {
      const index = this.state.todos.findIndex((el) => el.id === id);
      AxiosService.patchTodo(id, { title }).then((res) => {
        commit('toggleNewTodo', { index, res });
      });
    },
  },
});
