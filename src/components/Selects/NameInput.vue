<template>
  <div class="select">
    <div class="selectHeader">
      <input type="text"
             class="selectHeader_current_title select_current_input"
             :value="name"
             placeholder="edit me"
             @input="name = $event.target.value"
             v-on:change="onInputChange"
      >
    </div>
  </div>
</template>

<script>

import _ from 'lodash';
import axios from 'axios';

export default {

  data() {
    return {
      name: null,
    };
  },
  props: {
    setItems: Function,
  },

  watch: {
    // value: function (newValue) {
    //   newValue = newValue.replace(/[^\d]/g, '').trim();
    //   if (newValue.length > 0) {
    //     newValue = newValue + '$';
    //   }
    //   this.value = newValue;
    //   this.name = this.value;
    //
    // },

    name: function (newValue) {
      // newValue = newValue.replace(/[^\d]/g, '').trim();
      // if (newValue.length > 0) {
      //   newValue = newValue + '$';
      // }
      // this.value = newValue;
      this.name = newValue;
      this.debouncedSetNameFilter();
    },

  },
  created: function () {
    this.debouncedSetNameFilter = _.debounce(this.onInputChange, 1000);
  },
  methods: {
    onInputChange() {
      if (this.name) {
        this.$router.push({
          query: {
            ...this.$route.query,
            q: this.name,
          }
        });
      } else {

        console.log(this.$route.query);
        delete this.$route.query.q;

        console.log(this.$route.query);
        this.$router.push({
          query: {...this.$route.query},
      });
      }
      axios
          .get(`https://test-front.framework.team/paintings${this.$route.fullPath}`)
          .then(response => (this.setItems(response.data)))
          .catch(error => console.log(error));
    }
  },
  mounted() {
    this.$emit('input', this.selected);
    this.name = this.$route.query.q;
  },
};
</script>

<style scoped>
.select {
  width: 24%;
  min-width: 160px;
  position: relative;
  cursor: pointer;
}

.selectHeader {
  display: flex;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  justify-content: space-between;
}

.selectHeader_current_title {
  font-size: 14px;
  line-height: 24px;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select_current_input {
  width: 100%;
  outline: none;
  border: none;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
