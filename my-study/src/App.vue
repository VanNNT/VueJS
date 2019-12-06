<template>
  <div id="app">
    <div>
        <router-link to="/">
            <img alt="Vue logo" src="./assets/logo.png" width="5%">
        </router-link>
    </div>
    <div class="container">
        <aside class="aside">
            <router-view name="sidebar"/>
        </aside>
    </div>
    <div>
        <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
.container {
    margin-bottom: 20px;
}
.aside {
    padding: 20px;
    background-color: #aaa;
    width: 100%;
    height: 40px;
}
</style>
