import axios from "axios"

export default {
  // асинхронный метод через который получаем данные
  actions: {
    async fetchTodos({commit}) {
      // const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      // const todos = await res.json()
      return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const todos = [...res.data]
        commit('updateTodos', todos)
      })

    }
  },
  // синхронный метод через который меняется state
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos
    }
  },
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos
    }
  }
}
