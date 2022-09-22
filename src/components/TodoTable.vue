<template>
  <div>

    <div class="todo-item" v-for="todo in allTodos" :key="todo.id">
      <h2>{{todo.userId}}</h2>
      <p>{{todo.title}}</p>
      <p>{{todo.completed}}</p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
  name: 'App',
  computed: mapGetters(['allTodos']),
  methods: mapActions(['fetchTodos']),
  async mounted() {
    this.fetchTodos()
  }
}
</script>
