<template>
  <div class="container mx-auto pt-4">
    <div class="head">
      <div class="logo">
        <img src="https://placeholderlogo.com/img/placeholder-logo-1.png" alt="logo">
      </div>
      <div class="search_container flex">
        <button @click="search" class="search_button">Search</button><input v-model="title" type="text" class="search" @keyup.enter="search">
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    search () {
      this.$store.dispatch('movies/search', this.title)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16pt;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*:focus {
  outline: none;
  box-shadow: none;
}

.medium {
  font-size: 24pt;
  font-weight: 500;
}

.bold {
  font-size: 48pt;
  font-weight: 700;
}

h1{
  @apply bold;
}

.default{color:#ffffff}
.secondary{color:#7a8c99}
.disabled{color:#353f4c}
.highlight{color:#ff9f1c}
.active{color:#428bca}
.negative{color:#53489c}
.dark{color:#0a1014}
.grey{color:#1b2329}
.mid-grey{color:#353f4c}
.light-grey{color:#7a8c99}
.white{color:#fff}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.head {
  @apply h-32 w-full flex justify-between items-center;
}

.logo{
  @apply h-32 w-32 border border-gray-400 rounded-lg flex justify-between items-center;
}
.search_container{
  @apply h-6 w-3/4 pl-10;
}
.search{
    @apply h-full text-sm w-full border border-gray-400 px-4 rounded-r-lg;
}
.search_button{
    @apply border text-sm white bg-gray-600 px-2 rounded-l-lg;
}
</style>
