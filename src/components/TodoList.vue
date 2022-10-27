<template>
  <ul class="app-list">
    <todo-list-item
      v-for="todo of todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :isCompleted="todo.isCompleted"
      @on-toggle-checkbox="toggleTodo"
      @on-delete-todo="deleteTodo"
      @on-edit-todo="editTodo"
    />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  props: ['todos'],
  components: {
    TodoListItem,
  },
  methods: {
    toggleTodo(id) {
      this.$emit('on-toggle-checkbox', id);
    },
    deleteTodo(id) {
      this.$emit('on-delete-todo', id);
    },
    editTodo(todo) {
      this.$emit('on-edit-todo', todo);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
