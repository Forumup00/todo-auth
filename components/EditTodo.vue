<template>
  <div
    class="popup position-fixed top-0 start-0 w-100 d-flex align-items-center justify-content-center"
  >
    <form
      @submit.prevent="
        $emit('editTodo', { id: todo.id, text: text }), $emit('close')
      "
      class="w-25 p-3 bg-white rounded-2 d-flex align-items-center flex-column gap-3 position-relative"
    >
      <div class="position-absolute top-0 end-0">
        <button type="button" class="btn text-danger" @click="$emit('close')">
          <i class="fa-solid fa-xmark fs-5"></i>
        </button>
      </div>

      <h5 class="mb-0">Edit Todo number ({{ todo.index + 1 }}) !</h5>

      <input
        type="text"
        class="form-control fs-5 py-2"
        v-model="text"
        placeholder="Edit Todo"
      />

      <button type="submit" class="btn btn-outline-info w-100 fs-5 py-2">
        Save
      </button>
    </form>
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
  emits: ['editTodo', 'close'],
  data() {
    return {
      text: this.todo.title,
    }
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
