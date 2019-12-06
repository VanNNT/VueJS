<template>
  <div class="home">
    <div>
        <img class="robot" src="../assets/robot/robot-home.png" aria-hidden="true"/>
    </div>
    <div class="get-started">
        <router-link to="/build">Get started</router-link> {{mess}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data: function() {
      return {
          mess: 'building your first robot!'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.robot{
    height: 500px;
}
</style>
