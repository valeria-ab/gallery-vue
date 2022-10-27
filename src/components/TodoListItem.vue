<template>
  <li class="list-item">
    <div class="list-item__left">
      <label class="custom-checkbox">
        <input
          @click="$emit('on-toggle-checkbox', id)"
          type="checkbox"
          v-model="isChecked"
        />
        <span></span>
      </label>
      <p @click="startEditing" v-if="!isEditing" class="list-item__text">
        {{ title }}
      </p>
      <form v-else @submit.prevent="finishEditing" class="list-item__form">
        <input
          @blur="isEditing = false"
          type="text"
          v-model.trim.lazy="currentTitle"
          v-focus
          class="list-item__input"
        />
      </form>
    </div>
    <button
      @click="$emit('on-delete-todo', id)"
      type="button"
      class="list-item__button"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    isCompleted: Boolean,
  },
  data() {
    return {
      isEditing: false,
      currentTitle: this.title,
      isChecked: this.isCompleted,
    };
  },
  methods: {
    startEditing() {
      this.currentTitle = this.title;
      this.isEditing = true;
    },
    finishEditing() {
      if (this.currentTitle) this.$emit('on-edit-todo', { id: this.id, title: this.currentTitle });
      this.isEditing = false;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  input {
    color: #35495e;
  }
  color: #35495e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 5px;
  border: 2px solid #41b883;
  border-radius: 10px;
  &__left {
    width: 95%;
    display: flex;
  }
  &__text {
    overflow: hidden;
    width: 100%;
    height: 100%;
    text-align: left;
    margin: 0;
    font-size: 18px;
    cursor: pointer;
  }
  &__form {
    width: 100%;
  }
  &__input {
    width: 95%;
    height: 100%;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #41b883;
    outline: none;
    padding: 0;
    box-sizing: border-box;
  }
  &__button {
    width: 25px;
    height: 25px;
    color: #41b883;
    background-color: white;
    font-size: 14px;
    font-weight: 700;
    border: 2px solid #41b883;
    border-radius: 50px;
    cursor: pointer;
  }
  /* для элемента input c type="checkbox" */
  .custom-checkbox > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  /* создание в label псевдоэлемента before со следующими стилями */
  .custom-checkbox > span::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #41b883;
    border-radius: 50px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    cursor: pointer;
  }

  /* стили для чекбокса, находящегося в состоянии checked */
  .custom-checkbox > input:checked + span::before {
    border-color: #41b883;
    background-color: #41b883;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
}
</style>
