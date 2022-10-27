<template>

  <div id="mainPage">
    <SelectsBlock v-bind:setItems="setItems"/>

    <ArtGallery v-bind:items="items"/>
    <GalleryPagination/>
  </div>

</template>

<script>
import axios from 'axios';
import ArtGallery from '@/components/Gallery/ArtGallery';
import GalleryPagination from '@/components/Pagination/Pagination';
import SelectsBlock from '@/components/Selects/SelectsBlock';
// import axios from 'axios';

export default {
  name: 'mainPage',
  components: {
    ArtGallery, GalleryPagination, SelectsBlock
  },
  data() {
    return {
      items: null,
      // name: null,
      // location: null,
      // author: null,
      // created_gte: null,
      // created_lte: null,
    };
  },
  watch: {
    // name: function (newValue) {
    //   this.name = newValue;
    //   this.debouncedGetAnswer();
    // },

  },
  methods: {
    setItems: function (items) {
      this.items = items;
    }
  },
  mounted() {
    // this.name = this.$route.query.q;
    // this.location = this.$route.query.locationId;
    // this.author = this.$route.query.authorId;
    // this.created_gte = this.$route.query.created_gte;
    // this.created_lte = this.$route.query.created_lte;

    axios
        .get(`https://test-front.framework.team/paintings${this.$route.fullPath}`)
        .then(response => (this.items = response.data))
        .catch(error => console.log(error));
  },
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
