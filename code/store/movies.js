export const state = () => ({
  movies: false,
  movie: false
})

export const actions = {
  async search (context, movieName) {
    const moviesData = await this.$axios.$get(
      `https://www.omdbapi.com/?s=${movieName}&apikey=16360874`
    )
    if (moviesData && moviesData.Search) {
      context.commit('push_movies', moviesData.Search)
      context.commit('set_movie', false)
    } else {
      context.commit('push_movies', false)
      context.commit('set_movie', false)
    }
  },

  async searchDetails (context, id) {
    const movie = await this.$axios.$get(
      `http://www.omdbapi.com/?apikey=1a78b0ed&i=${id}`
    )
    if (movie) {
      context.commit('set_movie', movie)
    } else {
      context.commit('set_movie', false)
    }
  },

  unsetMovie (context) {
    context.commit('set_movie', false)
  }
}

export const getters = {
  getMovies: (state) => {
    return state.movies
  },
  getMovieDetails: (state) => {
    return state.movie
  }
}

export const mutations = {
  push_movies (state, object) {
    state.movies = object
  },
  set_movie (state, movie) {
    state.movie = movie
  }
}
