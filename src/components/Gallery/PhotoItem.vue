<template>
  <div id="photoItem" class="photoItem__container">
    <div class="photoItem"
         @mouseover="onMouseOver"
         @mouseleave="onMouseLeave">
      <img class="photoItem__img"
           :src="`https://test-front.framework.team/${picture.imageUrl}`"/>

      <div v-if="hover"
           class="photoItem__Title__common photoItem__title__hover"
      >
        <div class="photoItem__title__hover__container">
          <div class="photoItem__title__hover__title">{{ picture.name }}</div>

          <div>
            <span class="photoItem__title__hover__dataField">Author: </span>
            <span>{{ currentAuthor.name }}</span>
          </div>
          <div>
            <span class="photoItem__title__hover__dataField">Created: </span>
            <span>{{ picture.created }}</span>
          </div>
          <div>
            <span class="photoItem__title__hover__dataField">Location: </span>
            <span>{{ currentLocation.location }}</span>
          </div>
        </div>
      </div>
      <div v-else
           class="photoItem__Title__common photoItem__paintingTitle">
        <span class="photoItem__paintingTitle__container">{{ picture.name }}</span>
      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PhotoItem',
  props: {
    picture: Object,
  },
  data() {
    return {
      hover: false,
      locations: null,
      authors: null,
    };
  },
  computed: {
    currentLocation() {
      return this.locations.find((a) => a.id === this.picture.locationId);
    },
    currentAuthor() {
      return this.authors.find((a) => a.id === this.picture.authorId);
    },

  },
  methods: {
    onMouseOver() {
      this.hover = true;
    },
    onMouseLeave() {
      this.hover = false;
    },
  },
  created() {
    axios
      .get('https://test-front.framework.team/locations')
      .then((response) => {
        this.locations = response.data;
        this.currentLocation = response.data.find((a) => a.id === this.picture.locationId);
      })
      .catch((error) => console.log(error));
    axios
      .get('https://test-front.framework.team/authors')
      .then((response) => (this.authors = response.data))
      .catch((error) => console.log(error));
  },

};

</script>

<style scoped>
.photoItem__container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.photoItem {
  border-radius: 20px;
  background-color: lightgray;
  position: relative;
  max-width: 100%;
  height: 100%;
}

.photoItem__img {
  border-radius: 20px;
  max-width: 100%;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .photoItem,
  .photoItem__img {
    min-width: 280px;
    min-height: 205px;
  }

  .photoItem__container {
    width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .photoItem,
  .photoItem__img {
    min-width: 340px;
    min-height: 249px;
  }

  .photoItem__container {
    max-width: 48%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1365px) {
  .photoItem,
  .photoItem__img {
    min-width: 300px;
    min-height: 230px;
  }

  .photoItem__container {
    width: 32%;
  }
}

@media screen and (min-width: 1366px) {
  .photoItem,
  .photoItem__img {
    min-width: 360px;
    min-height: 275px;
  }

  .photoItem__container {
    width: 32%;
  }
}

.photoItem__Title__common {
  z-index: 100;
  position: absolute;
  border-radius: 0 0 20px 20px;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.75);
  width: 100%;
  text-align: left;
}

.photoItem__paintingTitle {
  display: flex;
  align-items: center;
  min-height: 30px;
  font-weight: 700;
  font-size: 19px;
  line-height: 20px;
}

.photoItem__paintingTitle__container {
  padding: 5px 10px 5px 20px;
  color: black;
}

.photoItem__title__hover {
  height: 55%;
}

.photoItem__title__hover__container {
  padding: 10px 10px 10px 20px;
}

.photoItem__title__hover__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}

.photoItem__title__hover__dataField {
  line-height: 28px;
  font-weight: 500;
  font-size: 17px;
}
</style>
