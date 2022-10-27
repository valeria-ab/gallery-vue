<template>
 <todo-list
    :todos="todos"
    @on-toggle-checkbox="toggleTodo"
    @on-delete-todo="deleteTodo"
    @on-edit-todo="editTodo"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoList from '../components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters({
      todos: 'doneTodos',
    }),
  },
  methods: {
    ...mapActions(['getAllTodos', 'deleteNewTodo', 'toggleNewTodo', 'updateNewTodo']),
    deleteTodo(id) {
      this.deleteNewTodo({ id });
    },
    toggleTodo(id) {
      this.toggleNewTodo({ id });
    },
    editTodo(id, title) {
      this.updateNewTodo(id, title);
    },
  },
  created() {
    this.getAllTodos('');
  },
};
</script>
