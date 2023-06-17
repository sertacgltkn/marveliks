<template>
  <div class="body">
    <div
      class="background-image"
      style="
        background-image: url('https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/648736bb1bab7/clean.jpg');
      "
    >
      <h1 class="main-title">Comics</h1>
    </div>

    <h2 class="sub-title">Western Comics</h2>
    <div v-if="isLoading" class="loading-message">Loading comics...</div>
    <div v-if="!isLoading" class="comics-list-container">
      <div class="scroll-button left" @click="scrollLeft">&#8249;</div>
      <div class="scroll-button right" @click="scrollRight">&#8250;</div>
      <div class="comics-list" ref="comicsList">
        <div class="grid-container">
          <div
            v-for="comic in comics.slice(0, 20)"
            :key="comic.id"
            class="comic-card"
          >
            <div class="comic-favorite" @click="toggleFavorite(comic)">
              <i
                class="fas fa-heart"
                :class="{ favorite: isFavorite(comic) }"
              ></i>
            </div>
            <img
              :src="getThumbnailURL(comic.thumbnail)"
              alt="Thumbnail"
              class="comic-image"
              @click="navigateToFav(comic.id)"
            />
            <div class="comic-details">
              <h2 class="comic-title">{{ comic.title }}</h2>
              <p class="comic-description">{{ comic.description }}</p>
              <ul class="comic-creators">
                <li v-for="creator in comic.creators.items" :key="creator.name">
                  {{ creator.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="sub-title">Comedy Comics</h2>
    <div class="comics-list-container">
      <div class="scroll-button left" @click="scrollLeft">&#8249;</div>
      <div class="scroll-button right" @click="scrollRight">&#8250;</div>
      <div class="comics-list" ref="comicsList2">
        <div class="grid-container">
          <div v-for="comic in sciFiComics" :key="comic.id" class="comic-card">
            <div class="comic-favorite" @click="toggleFavorite(comic)">
              <i
                class="fas fa-heart"
                :class="{ favorite: isFavorite(comic) }"
              ></i>
            </div>
            <img
              :src="getThumbnailURL(comic.thumbnail)"
              alt="Thumbnail"
              class="comic-image"
              @click="navigateToFav(comic.id)"
            />
            <div class="comic-details">
              <h2 class="comic-title">{{ comic.title }}</h2>
              <p class="comic-description">{{ comic.description }}</p>
              <ul class="comic-creators">
                <li v-for="creator in comic.creators.items" :key="creator.name">
                  {{ creator.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="sub-title">Politic Comics</h2>
    <div class="comics-list-container">
      <div class="scroll-button left" @click="scrollLeft">&#8249;</div>
      <div class="scroll-button right" @click="scrollRight">&#8250;</div>
      <div class="comics-list" ref="comicsList3">
        <div class="grid-container">
          <div v-for="comic in sciFiComics" :key="comic.id" class="comic-card">
            <div class="comic-favorite" @click="toggleFavorite(comic)">
              <i
                class="fas fa-heart"
                :class="{ favorite: isFavorite(comic) }"
              ></i>
            </div>
            <img
              :src="getThumbnailURL(comic.thumbnail)"
              alt="Thumbnail"
              class="comic-image"
              @click="navigateToFav(comic.id)"
            />
            <div class="comic-details">
              <h2 class="comic-title">{{ comic.title }}</h2>
              <p class="comic-description">{{ comic.description }}</p>
              <ul class="comic-creators">
                <li v-for="creator in comic.creators.items" :key="creator.name">
                  {{ creator.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["comics", "favorites"]),
    isLoading() {
      return this.comics.length === 0;
    },
    isLoadingSciFi() {
      return this.sciFiComics.length === 0;
    },
    sciFiComics() {
      return this.comics;
    },
    favoriteCount() {
      let count = 0;
      for (const comic of this.comics) {
        if (this.isFavorite(comic)) {
          count++;
        }
      }
      return count;
    },
    filteredComics() {
      return this.comics.filter((comic) => comic.publisher === "Marvel Comics");
    },
  },
  mounted() {
    this.fetchComics();
  },
  methods: {
    ...mapActions(["fetchComics", "toggleFavorite"]),
    getThumbnailURL(thumbnail) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    },
    navigateToFav(comicId) {
      this.$router.push({
        name: "FavPage",
        params: { id: comicId.toString() },
      });
    },

    scrollLeft() {
      const listContainer = this.$refs.comicsList;
      if (!listContainer) return;
      listContainer.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    },
    scrollRight() {
      const listContainer = this.$refs.comicsList;
      if (!listContainer) return;
      listContainer.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    },
    isFavorite(comic) {
      return this.favorites && this.favorites.includes(comic.id);
    },
  },
};
</script>

<style lang="scss">
.body {
  background-color: black;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: "hidden";
}

.navbar {
  margin-bottom: 0;
}

.main-title {
  text-align: center;
  color: white;
  margin-block-start: 0;
  font-size: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(51, 51, 51, 0.6);
  font-family: "Open Sans", sans-serif;
}

.sub-title {
  text-align: left;
  margin-left: 25px;
  color: white;
}

.loading-message {
  margin: 20px;
  font-size: 18px;
  text-align: center;
}

.comics-list-container {
  position: relative;
  overflow: hidden;
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 1;
}
.background-image {
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  background-size: cover;
}

.scroll-button.left:hover {
  background-color: gray;
}

.scroll-button.right:hover {
  background-color: gray;
}

.scroll-button.left {
  left: 10px;
  background-color: black;
}

.scroll-button.right {
  right: 10px;
  background-color: black;
}

.comics-list {
  display: flex;
  overflow-x: auto;
}

.grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  padding: 20px;
}

.comic-card {
  position: relative;
  display: flex;
  align-items: center;
  width: 150px;
  height: 240px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
}

.comic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 10px;
}

.comic-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: none;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.comic-title {
  font-size: 18px;
}

.comic-description {
  margin-bottom: 10px;
}

.comic-creators {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.comic-creators li {
  font-size: 14px;
}

.comic-favorite {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: gray;
  cursor: pointer;
  z-index: 2;
}

.favorite {
  color: red;
}

.comic-card:hover .comic-details {
  display: block;
}
.comic-card:hover {
  transform: scale(1.09);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.comics-list::-webkit-scrollbar {
  display: none;
}
</style>
