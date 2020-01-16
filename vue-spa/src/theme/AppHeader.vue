<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <router-link to="/" exact>
          <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
        </router-link>
        <router-link class="nav-item is-tab" to="/" exact>
            Home
        </router-link>
        <router-link class="nav-item is-tab" to="/category/front-end" exact>
            Front-end
        </router-link>
        <router-link class="nav-item is-tab" to="/category/mobile" exact>
            Mobile
        </router-link>
        <router-link class="nav-item is-tab" to="/login" exact>
          Login
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
@import '~bulma';
.is-active {
  color: green;
}
</style>
