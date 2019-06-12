class Cell {
  constructor(state, x, y) {
    this.state = state
    this.x = x
    this.y = y
  }
  nextState(cells) {
    var lives = this.getLives(cells)
    if (this.state === 0) {
      if (lives === 3) {
        this.state = 1
      }
    } else {
      if (lives < 2) {
        this.state = 0
      } else if (lives > 3) {
        this.state = 0
      }
    }
  }
  getLives(cells) {
    var lives = 0
    for (var i = -1; i <= 1; i++) {
      if (cells[this.x + i]) {
        for (var j = -1; j <= 1; j++) {
          if (cells[this.x + i][this.y + j]) {
            lives += +Boolean(cells[this.x + i][this.y + j].state)
          }
        }
      }
    }
    lives -= cells[this.x][this.y].state
    return lives
  }
}

class LifeGame {
  constructor(xlen, ylen) {
    this.xlen = xlen
    this.ylen = ylen
  }
  getEmptyView(){
    var table = []
    for (var i = 0; i < this.xlen; i++) {
        table[i] = []
        for (var j = 0; j < this.ylen; j++) {
          table[i][j] = new Cell(0, i, j)
        }
    }
    return table
  }
  getTableView() {
    var table = []
    for (var i = 0; i < this.xlen; i++) {
      table[i] = []
      for (var j = 0; j < this.ylen; j++) {
        var num = Math.round(Math.random(1, 0))
        table[i][j] = new Cell(num, i, j)
      }
    }
    // this.table = table;
    return table
  }
  dynamic(table) {
    let tempTable = []
    for (var i = 0; i < this.xlen; i++) {
      tempTable[i] = []
      for (var j = 0; j < this.ylen; j++) {
        const oldCell = table[i][j]
        const cell = new Cell(oldCell.state, i, j)
        tempTable[i][j] = cell
        cell.nextState(table)
      }
    }
    table = tempTable;
    return table
  }
}

export { LifeGame, Cell }
