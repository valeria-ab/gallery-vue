<template>
  <div id="selectsBlock" class="selects__block">
    <NameInput v-bind:setItems="setItems"/>
    <SelectWithOptions
        :options="authors"
        :default="'Author'"
        :title="'Author'"
        v-bind:setItems="setItems"
        class="select"
        @input="alert(displayToKey($event))"
    />
    <SelectWithOptions
        :options="locations"
        :default="'Location'"
        :title="'Location'"
        v-bind:setItems="setItems"
        class="select"
        @input="alert(displayToKey($event))"
    />
            <SelectWithDate />
  </div>
</template>

<script>

import axios from 'axios';
import SelectWithOptions from '@/components/Selects/SelectsWithOptions';
import NameInput from '@/components/Selects/NameInput';
import SelectWithDate from '@/components/Selects/SelectWithDate';

export default {
  name: 'SelectBlocks',
  components: {
    SelectWithOptions, NameInput, SelectWithDate,
  },
  data() {
    return {
      locations: null,
      authors: null,
    };
  },
  props: {
    setItems: Function,
  },
  mounted() {
    axios
      .get('https://test-front.framework.team/locations')
      .then((response) => (this.locations = response.data))
      .catch((error) => console.log(error));
    axios
      .get('https://test-front.framework.team/authors')
      .then((response) => (this.authors = response.data))
      .catch((error) => console.log(error));
  },

};

</script>

<style scoped>
.selects__block {
  display: flex;
  flex-wrap: wrap;
  min-height: 16vh;
  align-items: center;
  justify-content: space-between;
}
.select ::v-deep {
  width: 24%;
  min-width: 160px;
  position: relative;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .selects__Block {
    flex-direction: column;
    justify-content: space-around;
  }
  .select {
    width: 100%;
    margin-bottom: 15px;
  }
}
.select.is__active .selectBody {
  display: block;
}

.selectHeader {
  display: flex;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  justify-content: space-between;
}

.selectHeader__header__open__nightMode {
  border: 1px solid white;
  border-bottom: 1px solid rgba(67, 67, 67, 0.8);
  border-radius: 8px 8px 0 0;
  background-color: black;
  color: white;
}

.selectHeader__header__open__whiteMode {
  border: 1px solid black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px 8px 0 0;
  background-color: white;
  color: black;
}

.selectHeader__nightMode {
  background-color: black;
  color: white;
  border: 1px solid white;
}

.selectHeader__whiteMode {
  border: 1px solid black;
}

.selectHeader__current__title {
  font-size: 14px;
  line-height: 24px;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selectBody {
  left: 0;
  right: 0;
  top: 100%;
  position: absolute;
  border-top: 0;
  border-radius: 0 0 8px 8px;
  display: none;
  text-align: left;
  z-index: 99999;
  height: 300px;
  overflow-y: auto;
}
.selectBody::-webkit-scrollbar {
  width: 9px;
}
.selectBody::-webkit-scrollbar-track {
  border-radius: 8px;
}
.selectBody::-webkit-scrollbar-thumb {
  background-color: #7B7B7B;
  border-radius: 10px;
}

.selectBody__whiteMode {
  background-color: white;
  border: 1px solid black;
  border-top: 0;
}

.selectBody__nightMode {
  background-color: black;
  border: 1px solid white;
  border-top: 0;
}

.selectHeader__iconsContainer {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.select__icon {
  height: 20px;
  width: 20px;
  text-align: center;
  margin-left: auto;
  cursor: pointer;
  color: rgb(141, 143, 145);
}
</style>
