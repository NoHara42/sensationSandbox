<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Iko and Ned's digital tavern. We fuck shit up here.
    </p>
    <div id="p5Canvas" class="canvas"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}

//create p5js canvas
   const script = function (p5) {
    var speed = 2;
    var posX = 0;

    // NOTE: Set up is here
    p5.setup = _ => {
     p5.createCanvas(200, 200);
     p5.ellipse(p5.width / 2, p5.height / 2, 200, 200);
    }       // NOTE: Draw is here
    p5.draw = _ => {
     p5.background(0);
     const degree = p5.frameCount * 3;
     const y = p5.sin(p5.radians(degree)) * 50;

     p5.push();
      p5.translate(0, p5.height / 2);
      p5.ellipse(posX, y, 50, 50);
     p5.pop();   posX += speed;

     if (posX > p5.width || posX < 0) {
      speed *= -1;
     }
    }
   }    // NOTE: Use p5 as an instance mode
 const P5 = require('p5');
 let myP5 = new P5(script, 'p5Canvas');


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
