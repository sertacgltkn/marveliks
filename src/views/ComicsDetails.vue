<template>
  <div>
    <div v-for="comic in comics" :key="comic.id">
      <h2>{{ comic.title }}</h2>
      <p>{{ comic.description }}</p>
      <router-link :to="{ name: 'ComicsDetails', params: { id: comic.id } }">More</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['comics'])
  },
  created() {
    this.$store.dispatch('fetchComics')
  }
}
</script>