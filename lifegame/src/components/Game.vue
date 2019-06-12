<template>
  <table>
      <tbody>
         <tr v-for="(rows,i) in table" :key="i">
             <td v-for="(cell,j) in rows" :key="j"  :class="cell.state===0?'dead':'live'"></td>
             </tr> 
      </tbody>
  </table>
</template>
<style scoped>
td{
    width:10px;
    height:10px;
    border:1px solid #eaeaea;
}
.live{
    background-color: coral;
}
.dead{
    background-color: #ccc;
}
</style>
<script>
import LifeGame from  "../lifeGame.js"
export default {
    prop:{
        rows:Number,
        columns:Number
    },
  data() {
      const table =  new LifeGame(3,3).getTableView();
    return {
       table: table
    }

  },

  methods: {
   
}
}
</script>