new Vue({
    el: '#app',
    data() {
      return {
        range:10,
        red:0,
        blue:0,
        greem:0
      };
    },
    computed: {
      bindStyle(){
        return 'width: ${this.range}px; heigth: ${this.renge}px; background: rgb(${this.red,},${this.green},${this.blue})';
      }
    }
  });