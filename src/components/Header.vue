<template>
  <div class="btn-group">
    <router-link class="btn-group__btn" class-active="active" to="/" tag="button">All</router-link>
    <router-link class="btn-group__btn" to="/completed" tag="button">Completed</router-link>
    <router-link class="btn-group__btn" to="/uncompleted" tag="button">Uncompleted</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: 'Header',
  components: {},
  computed: {},
  methods: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss">
  .btn-group{
    width: 50%;
    margin: 0 auto;
    &__btn {
      width: 33.33333%;
      height: 30px;
      font-size: 18px;
      color: #35495e;
      background-color: #ffffff;
      border: 1px solid #35495e;
      &.router-link-exact-active{
        background-color:  #35495e;
        color: #ffffff;
      }
    }
  }
</style>
