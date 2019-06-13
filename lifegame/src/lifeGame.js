class Cell {
  constructor(state, x, y) {
    this.state = state;
    this.x = x;
    this.y = y;
  }
  nextState(cells) {
    var lives = this.getLives(cells);
    if (this.state === 0) {
      if (lives === 3) {
        this.state = 1;
      }
    } else {
      if (lives < 2) {
        this.state = 0;
      } else if (lives > 3) {
        this.state = 0;
      }
    }
  }
  getLives(cells) {
    var lives = 0;
    for (var i = -1; i <= 1; i++) {
      if (cells[this.x + i]) {
        for (var j = -1; j <= 1; j++) {
          if (cells[this.x + i][this.y + j]) {
            lives += +Boolean(cells[this.x + i][this.y + j].state);
          }
        }
      }
    }
    lives -= cells[this.x][this.y].state;
    return lives;
  }
}

class LifeGame {
  constructor(xlen, ylen) {
    this.xlen = xlen;
    this.ylen = ylen;
  }
    initState1(lifeCell) {
      var table = [];
      for (var i = 0; i < 3; i++) {
          table[i] = [];
          for (var j = 0; j < 3; j++) {
            for (var k = 0; k < lifeCell.length; k++) {
              if (i === lifeCell[k][0] && j === lifeCell[k][1]) {
               table[i][j] = new Cell(1, lifeCell[k][0], lifeCell[k][1])
              }else{
                table[i][j] = new Cell(0, i, j);
              }
            }
          }
      }
      return table;
    }
  getEmptyView(){
    var table = [];
    for (var i = 0; i < this.xlen; i++) {
        table[i] = [];
        for (var j = 0; j < this.ylen; j++) {
          table[i][j] = new Cell(0, i, j);
        }
    }
    return table;
  }
  getTableView() {
    var table = [];
    for (var i = 0; i < this.xlen; i++) {
      table[i] = [];
      for (var j = 0; j < this.ylen; j++) {
        var num = Math.round(Math.random(1, 0));
        table[i][j] = new Cell(num, i, j);
      }
    }
    // this.table = table;
    return table;
  }
  dynamic(table) {
    let tempTable = [];
    for (var i = 0; i < this.xlen; i++) {
      tempTable[i] = [];
      for (var j = 0; j < this.ylen; j++) {
        const oldCell = table[i][j];
        const cell = new Cell(oldCell.state, i, j);
        tempTable[i][j] = cell;
        cell.nextState(table);
      }
    }
    table = tempTable;
    return table;
  }
}

export { LifeGame, Cell }
