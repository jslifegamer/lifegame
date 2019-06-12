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
import {LifeGame, Cell} from  "../lifeGame.js"
export default {
    prop:{
        rows:Number,
        columns:Number
    },
  data() {
  //    const table =  new LifeGame(3,3).getTableView();
      return {
          game:{},
          table:[]
      }

  },
created(){
    this.game=new LifeGame(23,23);
   this.table= this.game.getTableView();
    var that=this;
   var timer=setInterval(()=>{
   let table= []
    for(var i=0;i<this.game.xlen;i++){
        table[i] =[];
          for(var j=0;j<this.game.ylen;j++){
            const oldCell = this.table[i][j];
            const cell = new Cell(oldCell.state,i,j);
            table[i][j] = cell;
            cell.nextState(this.table)
         }
    }
    this.table = table
   },100)

  
},
  methods: {
   
}
}
</script>