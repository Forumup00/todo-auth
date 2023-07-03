<template>
  <div class="container-fluid my-3">
    <div class="row mx-0">
      <div class="col-lg-8 col-md-10 col-sm-12 mx-auto">
        <div class="w-100">
          <h4 class="text-center mb-3">Fav work</h4>

          <div v-if="$store.getters.isFavArr.length === 0">
            <h5 class="text-center">No fav work</h5>
          </div>

          <div class="border rounded-3 fs-5" v-else>
            <ATodo
              v-for="(todo, i) in $store.getters.isFavArr"
              :key="todo.id"
              :todo="todo"
              :index="i"
              :length="$store.getters.isFavArr.length"
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
  name: 'Fav',
  data() {
    return {}
  },
  methods: {
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
