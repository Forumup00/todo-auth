import Vue from 'vue'

export const state = () => ({
  todos: [],
  token: '',
})

// All functions here cannot deal api
// All functions here used to edit on the state directly
export const mutations = {
  setTodos: (state, data) => {
    for (let todo of data) {
      state.todos.push({ ...todo, isFav: false })
    }
  },
  addTodo: (state, obj) => {
    state.todos.unshift(obj)
  },
  delTodo: (state, id) => {
    state.todos = state.todos.filter((item) => item.id !== id)
  },
  editTodo: (state, obj) => {
    let newObj = state.todos.find((item) => item.id === obj.id)
    newObj.title = obj.text
  },
  isCompleted: (state, id) => {
    let newObj = state.todos.find((item) => item.id === id)
    newObj.completed = !newObj.completed
  },
  isFav: (state, id) => {
    let newObj = state.todos.find((item) => item.id === id)
    newObj.isFav = !newObj.isFav
  },
  setToken: (state, val) => {
    state.token = val
  },
}

// All functions here used only for dealing with apis and cannot edit on the state directly to edit on the state from there we call mutation in it
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    await $axios
      .$get('https://jsonplaceholder.typicode.com/todos')
      .then((data) => commit('setTodos', data))
  },
}

export const getters = {
  isFavArr: (state) => {
    return state.todos.filter((item) => item.isFav === true)
  },
  isCompleted: (state) => {
    return state.todos.filter((item) => item.completed === true)
  },
}
