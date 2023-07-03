<template>
  <div class="parent d-flex justify-content-center align-items-center">
    <AuthFormSignup />
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
  name: 'Signup',
}
</script>

<style scoped>
.parent {
  height: 100vh;
}
</style>
