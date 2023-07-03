<template>
  <div class="parent d-flex justify-content-center align-items-center">
    <AuthFormLogin />
  </div>
</template>

<script>
export default {
  middleware({ redirect, $auth }) {
    if ($auth.loggedIn) {
      redirect('/')
    }
  },
  layout: 'auth',
  name: 'Login',
}
</script>

<style scoped>
.parent {
  height: 100vh;
}
</style>
