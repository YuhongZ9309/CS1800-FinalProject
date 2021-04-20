var grid;
var canvasSize;
var pixelWidth;
var inputPattern;

function setup() {
  noStroke();
}

function checkerBoard() {
  createArray();
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
      if ((j % 2) == (i % 2)) {
        grid[i][j] = color1;
      } else {
        grid[i][j] = color2;
      }
    }
  }
  drawArray();
}

function spiral() {
  createArray();
  for (var i = 0; i < canvasSize / 2; i += 1) {
    if (i % 2 == 0) {
      fill(color1);
    } else {
      fill(color2);
    }
    rect(i * pixelWidth, i * pixelWidth, pixelWidth * (canvasSize - i - i), pixelWidth * (canvasSize - i - i));
  }
}

function diamond() {
  createArray();
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
      if (i % 8 == 0) {
        if ((j % 6) == 3) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 1) {
        if ((j % 6) == 2 || (j % 6) == 3 || (j % 6) == 4) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 2) {
        if ((j % 6) == 1 || (j % 6) == 2 || (j % 6) == 4 || (j % 6) == 5) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 3) {
        if ((j % 6) == 0 || (j % 6) == 1 || (j % 6) == 5) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 4) {
        if ((j % 6) == 0) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 5) {
        if ((j % 6) == 0 || (j % 6) == 1 || (j % 6) == 5) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 6) {
        if ((j % 6) == 1 || (j % 6) == 2 || (j % 6) == 4 || (j % 6) == 5) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 7) {
        if ((j % 6) == 2 || (j % 6) == 3 || (j % 6) == 4) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } 
    }
  }
  drawArray();
}

function cross() {
  createArray();
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
      if (i % 8 == 0) {
        if ((j % 4) == 0) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 1) {
        if ((j % 8) == 2 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 2) {
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 3) {
        if ((j % 8) == 2 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 4) {
        if ((j % 4) == 0) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 5) {
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 6) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 6) {
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 7) {
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 6) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } 
    }
  }
  drawArray();
}
function createArray() {
  noStroke();
  canvasSize = binaryInput;
  pixelWidth = Math.round(1000/ canvasSize);
  createCanvas(canvasSize * pixelWidth, canvasSize * pixelWidth).parent('drawing');
  background(255);
  grid = [];
  for (var row = 0; row < canvasSize; row++) {
    var gridRow = [];
    for (var col = 0; col < canvasSize; col++) {
      gridRow.push(color1);
    }
    grid.push(gridRow);
  }
  
}
function drawArray() {
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
        fill(grid[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth);
    }
  }
}
