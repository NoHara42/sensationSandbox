<template>
  <div class="home">
    <h1>Welcome to Tech Tavern!</h1>
    <MovingCircle></MovingCircle>
  </div>
</template>

<script>
// @ is an alias to /src
import MovingCircle from '@/components/MovingCircle.vue'

export default {
  name: 'home',
  components: {
    MovingCircle
  }
}
</script>
