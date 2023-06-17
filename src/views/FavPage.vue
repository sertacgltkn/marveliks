<template>
  <div>
    <h1>Favorite</h1>

    <div v-if="comic" class="comic-details">
      <h2 class="comic-title">{{ comic.title }}</h2>
      <p class="comic-description">{{ comic.description }}</p>
      <ul class="comic-creators">
        <li v-for="creator in comic.creators" :key="creator.name">{{ creator.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getComicById']),
    comic() {
      const comicId = this.$route.params.id;
      return this.getComicById(parseInt(comicId));
    }
  }
};
</script>

<style lang="scss">

</style>
