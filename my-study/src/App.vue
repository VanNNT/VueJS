<template>
  <div id="app">
    Root foo: {{rootFoo}} <br/>
    Robots Foo: {{robotsFoo}} <br/>
    Users Foo: {{usersFoo}} <br/>
    <br/>
    Root getter foo: {{rootGetterFoo}} <br/>
    Robots Getter foo: {{robotsGetterFoo}} <br/>
    Users Getter Foo: {{usersGetterFoo}} <br/>
    <div>
        <router-link to="/">
            <img alt="Vue logo" src="./assets/logo.png" width="5%">
        </router-link>
    </div>
    <div>
        <router-link to="/cart" exact>
            Cart
        </router-link>
        <div class="cart-items">
            {{getCartLength}}
        </div>
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
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
        ...mapState({
          rootFoo: 'foo', 
          usersFoo: state => state.users.foo}),
        //or
        ...mapState('robots', {robotsFoo: 'foo'}),

        ...mapGetters({ 
          rootGetterFoo: 'foo',
          usersGetterFoo: 'users/foo'
        }),
        //or
        ...mapGetters('robots', {robotsGetterFoo: 'foo'}),

      getCartLength() {
          return this.$store.state.robots.items.length;
      }
  }
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
.cart-items {
    top: -5px;
    right: -9px;
    font-size: 18px;
    width: 20px;
    text-align: center;
    display: inline-block;
    border-radius: 100px;
    background-color: mediumaquamarine;
}
</style>
