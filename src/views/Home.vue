<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/ikomeme.jpeg">
    <HelloWorld msg="Welcome to Tech Tavern"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
