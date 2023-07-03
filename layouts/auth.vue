<template>
  <div>
    <div class="nav nav-lg-expand bg-dark py-3 sticky-top">
      <div class="container-fluid">
        <div
          class="w-100 d-flex justify-content-center align-items-center gap-3"
        >
          <NuxtLink
            to="/auth/login"
            class="text-decoration-none text-white fs-5"
          >
            LogIn
          </NuxtLink>

          <span class="text-white">|</span>

          <NuxtLink
            to="/auth/signup"
            class="text-decoration-none text-white fs-5"
          >
            SignUp
          </NuxtLink>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {}
  },
  created() {
    this.$store.commit('setToken', '')
  },
}
</script>

<style scoped></style>
