<template>
  <div class="container-fluid my-3">
    <div class="row mx-0">
      <div class="col-lg-8 col-md-10 col-sm-12 mx-auto">
        <div class="w-100">
          <form class="mb-2" @submit.prevent="addTodo">
            <label for="todo" class="form-label fs-5">Write todo</label>

            <div class="d-flex justify-content-center align-items-center gap-3">
              <input
                id="todo"
                type="text"
                class="form-control fs-5 py-2"
                placeholder="What u are planing?"
                v-model="text"
              />

              <button class="btn btn-dark py-2 fs-5" :disabled="isDisabled">
                Add
              </button>
            </div>
          </form>

          <div class="border rounded-3 fs-5">
            <ATodo
              v-for="(todo, i) in $store.state.todos"
              :key="todo.id"
              :todo="todo"
              :index="i"
              :length="$store.state.todos.length"
              @deleteTodo="deleteTodo"
              @editTodo="editTodo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  name: 'Home',
  data() {
    return {
      text: '',
    }
  },
  computed: {
    isDisabled() {
      return !this.text || this.text.trim() === '' ? true : false
    },
  },
  methods: {
    addTodo() {
      if (this.text || this.text.trim() !== '') {
        let obj = {
          id: crypto.randomUUID(),
          title: this.text,
          completed: false,
          isFav: false,
        }
        this.$store.commit('addTodo', obj)
        this.text = ''
      }
    },
    deleteTodo(id) {
      this.$store.commit('delTodo', id)
    },
    editTodo(obj) {
      this.$store.commit('editTodo', obj)
    },
  },
}
</script>

<style scoped></style>
