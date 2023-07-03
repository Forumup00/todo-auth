<template>
  <div
    class="popup position-fixed top-0 start-0 w-100 d-flex align-items-center justify-content-center"
  >
    <div
      class="w-25 p-3 bg-white rounded-2 d-flex align-items-center flex-column gap-3 position-relative"
    >
      <div class="position-absolute top-0 end-0">
        <button class="btn text-danger" @click="$emit('close')">
          <i class="fa-solid fa-xmark fs-5"></i>
        </button>
      </div>

      <h5 class="mb-0">Delete Todo number ({{ todo.index + 1 }}) !</h5>

      <button
        class="btn btn-outline-danger w-100 fs-5 py-2"
        @click="$emit('deleteTodo', todo.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
      default: null,
    },
  },
  emits: ['deleteTodo', 'close'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.popup {
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
