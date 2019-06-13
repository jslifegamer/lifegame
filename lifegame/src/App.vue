<template>
  <div id="app">
   
    <Game :row="rowIndex" :columns="columnIndex"/>
  
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  data() {
    return {
      rowIndex:15,
      columnIndex:15
    };
  },

  name: 'app',
  components: {
   Game
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
