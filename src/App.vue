<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Table :users_data="users"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from './components/table/Table'
export default {
  name: 'App',
  components: {
    Table
},
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  mounted() {
    this.getUsers()
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
