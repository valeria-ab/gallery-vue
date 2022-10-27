<template>
  <div class="select-with-options"
       :tabindex="tabindex"
       @blur="open = false">
    <div v-if="title === 'Author' && selected.name"
         class="selected"
         :class="{ open: open }"
         @click="open = !open">
      {{ selected.name }}
    </div>
    <div v-else-if="title === 'Author' && authorFromUrl"
         class="selected"
         :class="{ open: open }"
         @click="open = !open">
      {{ authorFromUrl.name }}
    </div>
    <div v-else-if="title === 'Location' && selected.location"
         class="selected"
         :class="{ open: open }"
         @click="open = !open">
      {{ selected.location }}
    </div>
    <div v-else-if="title === 'Location' && locationFromUrl"
         class="selected"
         :class="{ open: open }"
         @click="open = !open">
      {{ locationFromUrl.location }}
    </div>
    <div v-else
         class="selected"
         :class="{ open: open }"
         @click="open = !open">
      {{ title }}
    </div>

    <div v-if="title === 'Author'"
         class="items"
         :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="onAuthorClick(option)"
      >
        {{ option.name }}
      </div>
    </div>
    <div v-else-if="title === 'Location'"
         class="items"
         :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="onLocationClick(option)"
      >
        {{ option.location }}
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'SelectWithOptions',
  props: {
    title: String,
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    setItems: Function,
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
      locationFromUrl: null,
      authorFromUrl: null,
    };
  },
  mounted() {
    this.$emit('input', this.selected);
    this.locationFromUrl = this.options.find((option) => option.id === +this.$route.query.locationId);
    this.authorFromUrl = this.options.find((option) => option.id === +this.$route.query.authorId);
  },
  methods: {
    onLocationClick(location) {
      this.selected = location;
      this.open = false;
      this.$emit('input', location);

      this.$router.push({
        query: {
          ...this.$route.query,
          locationId: location.id,
        },
      });
    },
    onAuthorClick(author) {
      this.selected = author;
      this.open = false;
      this.$emit('input', author);

      this.$router.push({
        query: {
          ...this.$route.query,
          authorId: author.id,
        },
      });
      axios
        .get(`https://test-front.framework.team/paintings${this.$route.fullPath}`)
        .then((response) => (this.setItems(response.data)))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.select-with-options {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.select-with-options .selected {
  background-color: #0a0a0a;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-with-options .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.select-with-options .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.select-with-options .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.select-with-options .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-with-options .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
