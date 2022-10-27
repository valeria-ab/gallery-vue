<template>
  <form @submit.prevent="addTodo" class="form">
    <input v-model.trim.lazy="newTitle" type="text" class="form__input" />
    <button class="form__button" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTitle: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTitle) this.$emit('on-new-todo', this.newTitle);
      this.newTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  width: 100%;
  height: 40px;
  &__input,
  &__button {
    font-size: 20px;
    border: 2px solid #41b883;
    border-radius: 10px;
    color: #35495e;
    background-color: #fff;
  }
  &__input {
    width: 80%;
  }
  &__button {
    padding: 0;
    width: 19%;
    margin-left: 1%;
    cursor: pointer;
  }
}
</style>
