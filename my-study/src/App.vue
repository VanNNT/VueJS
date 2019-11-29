<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RobotBuilder/>
  </div>
</template>

<script>
//import TodoList from './components/TodoList/TodoList.vue'
import RobotBuilder from './components/RobotBuilder.vue'

export default {
  name: 'app',
  components: {
    RobotBuilder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
