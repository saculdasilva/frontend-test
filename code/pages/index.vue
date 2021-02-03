<template>
  <div class="pt-12 h-full">
    <div v-if="!getMovies && !getMovieDetails" class="w-full border border-gray-400 rounded-lg image_block flex justify-center items-center">
      <p>No movies found. Please search for a movie above.</p>
    </div>
    <div v-if="getMovies && !getMovieDetails" class="w-full pt-5">
      <div v-for="movie in getMovies" :key="movie.title" class="w-1/3 inline-block" style="padding: 10px">
        <div class="border border-grey-500 rounded-md w-full h-full cursor-pointer hover:shadow-2xl transition duration-500" @click="searchDetails(movie.imdbID)">
          <div class="mx-2 my-3 font-bold">
            {{ movie.Title }}
          </div>
          <img
            :src="movie.Poster != 'N/A' ? movie.Poster : 'http://placehold.jp/24/b3b3b3/ffffff/200x300.png?text=no_poster'"
            alt="poster"
            class="movie_poster"
          >
        </div>
      </div>
    </div>
    <div v-if="getMovieDetails" class="w-full pt-5">
      <button @click="unsetMovie()">
        ← Back Page
      </button>
      <div class="flex w-full justify-between">
        <div class="h-full w-1/2 pt-8">
          <h1>{{ getMovieDetails.Title }}</h1>
          <p class="medium pt-10">
            Plot
          </p>
          <p>{{ getMovieDetails.Plot }}</p>
          <div class="flex justify-between pt-12">
            <div>
              Cast
              <li v-for="actor in getMovieDetails.Actors.split(',')" :key="actor">
                {{ actor }}
              </li>
            </div>
            <div>
              Genre
              <li v-for="genre in getMovieDetails.Genre.split(',')" :key="genre">
                {{ genre }}
              </li>
            </div>
            <div>
              Director
              <li v-for="director in getMovieDetails.Director.split(',')" :key="director">
                {{ director }}
              </li>
            </div>
          </div>
        </div>
        <div class="h-full w-1/2">
          <img class="max-h-96 float-right" width="75%" :src="getMovieDetails.Poster != 'N/A' ? getMovieDetails.Poster : 'http://placehold.jp/24/b3b3b3/ffffff/200x400.png?text=no_poster'" alt="poster">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('movies', [
      'getMovies',
      'getMovieDetails'
    ])
  },
  methods: {
    searchDetails (imdbID) {
      this.$store.dispatch('movies/searchDetails', imdbID)
    },
    unsetMovie () {
      this.$store.dispatch('movies/unsetMovie')
    }
  }
}
</script>

<style scoped>
.image_block{
    height: 60vh;
}
.movie_poster{
  @apply w-full h-64 my-2;
  object-fit: scale-down;
}
</style>
