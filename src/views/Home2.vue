<template>
  <div class="hello">
    <img class="images" alt="Nani" src="../assets/ikomeme.jpeg">
    <h1 class="home">Welcome to Tech Tavern!</h1>
    <p>
      Iko and Ned's digital tavern. We fuck shit up here.
    </p>
    <div id="p5Canvas" class="canvas">{{ p5circles }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { p5circles } from '@/components/MovingCircle.vue'

export default {
  name: 'home2',
  components: {}
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.canvas {
  justify-content: center;
}
.images {
  height:300px;
  width:300px;
}
</style>