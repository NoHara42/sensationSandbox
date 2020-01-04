<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MovingCircles extends Vue {
   @Prop() private p5circles!: any;
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
 let p5circles = new P5(script, 'p5Canvas');


</script>