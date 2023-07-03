<template>
  <div>
    <NavBar />

    <Nuxt />
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      token: Cookies.get('auth._token.local'),
    }
  },
  created() {
    this.$store.commit('setToken', Cookies.get('auth._token.local'))
  },
}
</script>
