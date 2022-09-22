<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <TodoHeaders />

    <!-- все посты -->
    <!-- <div class="todo-item" v-for="todo in allTodos" :key="todo.id">
      <h2>{{todo.userId}}</h2>
      <p>{{todo.title}}</p>
      <p>{{todo.completed}}</p>
    </div> -->
    <TodoTable />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoHeaders from './components/TodoHeaders.vue'
import TodoTable from './components/TodoTable.vue'

export default {
  name: 'App',
  components: { TodoHeaders, TodoTable },
  computed: mapGetters(['allTodos']),
  methods: mapActions(['fetchTodos']),
  async mounted() {
    this.fetchTodos()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-item {
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
