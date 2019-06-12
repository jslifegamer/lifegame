class Cell {
    constructor(state,x,y){
        this.state=state;
        this.x=x;
        this.y=y;
    }
    nextState(cells){
        var lives = this.getLives(cells);
        if(this.state===0){
            if(lives===3)
            this.state=1;
        }else{
            if(lives<2){
                this.state=0;
            }else if(lives>3){
                this.state=0;
            }
        }
    }
    getLives(cells){
        var lives=0;

        for(var i = -1;i <= 1;i++){
            if(cells[this.x+i]){
                for(var j = -1;j <= 1;j++){
                    lives +=  +Boolean(cells[this.x+i][this.y+j]);
                }
            }
        }
        lives -= cells[this.x][this.y];
        return lives;
    }
}

class LiveGame{
    constructor(xlen,ylen){
        this.xlen = xlen;
        this.ylen = ylen;
    }
    getTableView() {
        var table = [];
        for(var i=0;i<this.xlen;i++){
            table[i]=[];
            for(var j=0;j<this.ylen;j++){
                table[i][j] = new Cell(1,i,j);
            }
        }
        this.table = table;
        return table;
    }
}

export default LiveGame;