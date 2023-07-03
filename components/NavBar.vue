<template>
  <div class="nav nav-lg-expand bg-dark py-3 sticky-top">
    <div class="container-fluid">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-center align-items-center gap-5">
          <NuxtLink to="/" class="text-decoration-none text-white fs-5">
            Home
          </NuxtLink>

          <NuxtLink
            to="/completed"
            class="text-decoration-none text-white fs-5"
          >
            Completed
          </NuxtLink>

          <NuxtLink to="/fav" class="text-decoration-none text-white fs-5">
            Fav
          </NuxtLink>
        </div>

        <div
          v-if="$auth.loggedIn"
          class="d-flex justify-content-center align-items-center gap-3"
        >
          <button
            class="btn btn-light border-0 px-3"
            @click="$router.push('/profile')"
          >
            {{ $auth.user.name }}
          </button>

          <button class="btn btn-light border-0 px-3" @click="$auth.logout()">
            LogOut
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {}
  },
}
</script>
<style scoped>
.nav {
  z-index: 1;
}
</style>
