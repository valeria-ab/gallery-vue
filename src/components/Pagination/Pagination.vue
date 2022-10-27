<template>
  <div id="gallery">
pagination
  </div>
</template>

<script>


// import axios from 'axios';

export default {
  name: 'GalleryPagination',
  data() {
    return {
      items: null,
      filteredItems: null
    };
  },
  // mounted() {
  //   axios
  //       .get('https://test-front.framework.team/paintings')
  //       .then(response => (this.items = response.data))
  //       .catch(error => console.log(error));
  // },
  // methods: {
  //   getPaintingsByLocation: function(id) {
  //     axios
  //         .get(`https://test-front.framework.team/paintings/?locationId=${id}`)
  //         .then(response => (this.filteredItems = response.data))
  //         .catch(error => console.log(error));
  //   },
  // }
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
