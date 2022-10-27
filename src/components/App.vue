<template>
  <div id="app" class="app">
<!--    <div class="header">-->
<!--      <Header />-->
<!--    </div>-->
<!--    <section class="main-section">-->
<!--      <todo-add-form @on-new-todo="addTodo" />-->
<!--      <hr class="hr" />-->
<!--      &lt;!&ndash; <todo-list-->
<!--        :todos="todos"-->
<!--        @on-toggle-checkbox="toggleTodo"-->
<!--        @on-delete-todo="deleteTodo"-->
<!--        @on-edit-todo="editTodo"-->
<!--      /> &ndash;&gt; </section>-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import TodoList from './TodoList.vue';
// import TodoAddForm from './TodoAddForm.vue';
// import Header from './Header.vue';

export default {
  data() {
    return {};
  },
  name: 'App',
  components: {
    // TodoAddForm,
    // TodoList,
    // Header,
  },
  // computed: {
  //   ...mapGetters({
  //     todos: 'todos',
  //   }),
  // },
  computed: {
    ...mapGetters({
      todos: 'todos',
    }),
  },
  methods: {
    ...mapActions(['getAllTodos', 'addNewTodo', 'deleteNewTodo', 'toggleNewTodo', 'updateNewTodo']),
    addTodo(item) {
      this.addNewTodo({ todo: item });
    },
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
  mounted() {},
  created() {
    this.getAllTodos('');
  },
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  margin: 0 auto;
  width: 90%;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 40px;
  background-color: #41b883;
}
.main-section {
  width: 70%;
  margin: 0 auto;
  padding: 30px;
}
.hr {
  height: 1px;
  border: none;
  background-color: #41b883;
}
#app {
  font-family: sans-serif;
  color: #35495e;
  box-sizing: border-box;
  input,
  button {
    outline: none;
  }
}
</style>
