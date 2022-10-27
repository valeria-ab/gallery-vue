<template>
  <div class="select"
       :class="{ is__active: open }"
       @blur="open = false"
  >
    <div :class="{ headerOpenStyle: open,  headerClosedStyle: !open}"
         @click="open = !open"
    >
    <span class="selectHeader__current__title">created</span>
    <div class="selectHeader__iconsContainer">
      <div
          class="select__icon" >
<!--         style={crossIconStyle}-->
<!--          onClick={onCrossIconClick}-->
    &times;</div>
      <div class="select__icon select__icon__arrow" >
<!--           onClick={onArrowClick}-->
     &#9660;</div>
    </div>
  </div>

  <div >
<!--      class={isNightModeOn-->
<!--       ? `${style.selectBody} ${s.SelectWithDate__selectBody} ${style.selectBody__nightMode}`-->
<!--       : `${style.selectBody} ${s.SelectWithDate__selectBody} ${style.selectBody__whiteMode}`}-->

    <div class="SelectWithDate__fieldsContainer">
      <input type="number"
             class="created__year__field"
      />
<!--             placeholder={'from'}-->
<!--             value={from}  -->
<!--             onChange={(e) => setFrom(e.currentTarget.value)}-->
<!--      onKeyUp={onKeyUpHandler}-->

      <span class="SelectWithDate__selectBody__dash SelectWithDate__selectBody__dash__nightMode"
            >&#8212;
                </span>
      <input type="number"
             class="created__year__field"  />
<!--             placeholder={'before'}-->
<!--             value={before}-->
<!--             onChange={(e) => setBefore(e.currentTarget.value)}-->
<!--      onKeyUp={onKeyUpHandler}-->

    </div>
  </div>
  </div>
</template>

<script>

import _ from 'lodash';
import axios from 'axios';

export default {

  data() {
    return {
      open: false,
    };
  },
  // props: {
  //   setItems: Function,
  // },

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

    name(newValue) {
      // newValue = newValue.replace(/[^\d]/g, '').trim();
      // if (newValue.length > 0) {
      //   newValue = newValue + '$';
      // }
      // this.value = newValue;
      this.name = newValue;
      this.debouncedSetNameFilter();
    },

  },
  created() {
    this.debouncedSetNameFilter = _.debounce(this.onInputChange, 1000);
  },
  methods: {
    onInputChange() {
      if (this.name) {
        this.$router.push({
          query: {
            ...this.$route.query,
            q: this.name,
          },
        });
      } else {
        console.log(this.$route.query);
        delete this.$route.query.q;

        console.log(this.$route.query);
        this.$router.push({
          query: { ...this.$route.query },
        });
      }
      axios
        .get(`https://test-front.framework.team/paintings${this.$route.fullPath}`)
        .then((response) => (this.setItems(response.data)))
        .catch((error) => console.log(error));
    },

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
.select-with-options {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
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
  /*border: none;*/
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
}

.SelectWithDate__selectBody {
  right: 0;
  height: auto;
}
.SelectWithDate__fieldsContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  align-items: center;
  justify-content: space-around;
}
.created__year__field {
  border: none;
  background: #EFEFEF;
  cursor: pointer;
  width: 30%;
  min-width: 50px;
  height: 42px;
  border-radius: 8px;
  margin: 0 auto;
  padding-left: 15px;

}
@media screen and (min-width: 768px) and (max-width: 1029px) {
  .SelectWithDate__fieldsContainer {
    flex-direction: column;
  }
  .created__year__field {
    width: 90%;
    max-width: 110px;
  }
}
@media screen and (max-width: 767px) and (min-width: 1030px) {
  .SelectWithDate__fieldsContainer {
    flex-direction: row;
  }
  .created__year__field {
    width: 30%;
    min-width: 50px;
  }
}
.SelectWithDate__selectBody__dash {
  text-align: center;
  margin-left: 3px;
  margin-right: 3px;
}
.SelectWithDate__selectBody__dash__nightMode {
  color: white;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: textfield;
}
</style>
