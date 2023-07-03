<template>
  <form class="w-50 border rounded-3 p-3" @submit.prevent="">
    <div class="mb-3 w-100">
      <label for="email" class="form-label fs-5">Email</label>

      <input
        type="email"
        id="email"
        class="form-control fs-5 py-2"
        placeholder="Enter your Email"
      />
    </div>

    <div class="mb-3 w-100">
      <label for="date" class="form-label fs-5">Date of birth</label>

      <client-only>
        <date-picker
          placeholder="MM/DD/YYYY"
          format="MM/dd/yyyy"
          v-model="date_today"
          class="w-100"
        />
      </client-only>
    </div>

    <div class="fs-5 mb-3 w-100">
      <label for="password" class="form-label fs-5">Password</label>

      <input
        type="password"
        id="password"
        class="form-control fs-5 py-2"
        placeholder="Enter your password"
      />
    </div>

    <div class="fs-5 w-100">
      <button class="btn btn-outline-primary w-100 fs-5 mb-2">Signup</button>

      <p class="mb-0 text-center">
        <NuxtLink
          to="/auth/login"
          class="text-decoration-none text-warning fw-bold"
          >I haven an account</NuxtLink
        >
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FromSignup',
  data() {
    return {
      date_today: new Date(),
    }
  },
}
</script>

<style scoped></style>
