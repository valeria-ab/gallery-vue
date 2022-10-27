<template>
  <div id="gallery" class="gallery__container">
    <p v-if="!items">There are no pictures matching the specified filter.
      Please set a different value. </p>
    <PhotoItem v-for="item in items" :key="item.id" :picture="item"/>
  </div>
</template>

<script>
// import axios from 'axios';

import PhotoItem from '@/components/Gallery/PhotoItem';

export default {
  name: 'ArtGallery',
  props: {
    items: Array,
    locations: null,
    authors: null,
  },
  components: {
    PhotoItem,
  },
  // data() {
  //   return {
  //     items: null,
  //   };
  // },
  //
  // methods: {
  //   getPaintingsByLocation: function (id) {
  //     axios
  //         .get(`https://test-front.framework.team/paintings/?locationId=${id}`)
  //         .then(response => (this.filteredItems = response.data))
  //         .catch(error => console.log(error));
  //   },
  // }

  mounted() {
  //   axios
  //       .get(`https://test-front.framework.team/paintings${this.$route.fullPath}`)
  //       .then(response => (this.items = response.data))
  //       .catch(error => console.log(error));

    console.log(this.items);
  },
};

</script>

<style scoped>
.gallery__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 56vh;
  width: 100%;
}
@media screen and (max-width: 767px) {
  .gallery__container {
    justify-content: space-around;
  }
}
</style>
