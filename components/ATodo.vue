<template>
  <div
    class="w-100 p-2"
    :class="index !== length - 1 && 'border-bottom border-2'"
  >
    <div
      class="d-flex justify-content-between align-items-md-start flex-md-row flex-sm-column flex-column align-items-sm-center align-items-center gap-3"
    >
      <div class="d-flex align-items-start gap-2 flex-grow-1">
        <p class="mb-0">{{ index + 1 }}.</p>

        <p class="mb-0">
          {{ todo.title }}{{ todo.title.at(-1) !== '.' ? '.' : '' }}
        </p>
      </div>

      <div class="d-flex align-items-center gap-2">
        <button
          class="btn"
          :class="todo.isFav ? 'btn-danger' : 'btn-outline-danger'"
          :title="todo.isFav ? 'Fav' : 'Unfav'"
          @click="$store.commit('isFav', todo.id)"
        >
          <i class="fa-solid fa-heart"></i>
        </button>

        <button
          class="btn"
          :class="todo.completed ? 'btn-primary' : 'btn-outline-primary'"
          :title="todo.completed ? 'Completed' : 'Uncompleted'"
          @click="$store.commit('isCompleted', todo.id)"
        >
          <i class="fa-solid fa-circle-check"></i>
        </button>

        <button
          class="btn btn-outline-info"
          @click="isEdited = true"
          title="Edit"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          class="btn btn-outline-danger"
          @click="isDeleted = true"
          title="Delete"
        >
          Del
        </button>
      </div>
    </div>

    <DeleteTodo
      v-if="isDeleted"
      :todo="{ ...todo, index }"
      @deleteTodo="deleteTodo"
      @close="isDeleted = false"
    />

    <EditTodo
      v-if="isEdited"
      :todo="{ ...todo, index }"
      @editTodo="editTodo"
      @close="isEdited = false"
    />
  </div>
</template>

<script>
export default {
  name: 'ATodo',
  props: {
    todo: {
      type: Object,
      required: true,
      default: null,
    },
    length: {
      type: Number,
      required: true,
      default: null,
    },
    index: {
      type: Number,
      required: true,
      default: null,
    },
  },
  emits: ['deleteTodo', 'editTodo'],
  data() {
    return {
      isDeleted: false,
      isEdited: false,
    }
  },
  methods: {
    deleteTodo(id) {
      this.$emit('deleteTodo', id)
    },
    editTodo(obj) {
      this.$emit('editTodo', obj)
    },
  },
}
</script>

<style scoped></style>
