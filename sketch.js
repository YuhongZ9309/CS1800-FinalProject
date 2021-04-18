var color1;
var color2;
var grid;
var inputPixel;
var canvasSize;
var pixelWidth;
var inputPattern;
var inputColor;

function setup() {
  noStroke();
  createCanvas(500, 500);
  //canvasSize = 16 //prompt("enter a 4 bit binary number");

  background(220);
  // inputPixel = prompt("enter a 8 bit binary number");
  canvasSize = 32;
  parseInt(inputPixel, 2);
  pixelWidth = (800 / canvasSize);
  inputPattern = 1; //prompt("enter a number 1")
  if (inputPattern == 1) {
    // inputColor = prompt("enter a 12 digit hexadecimal string");
    color1 = "red"; // #"+ inputColor.substring(0,6);
    color2 = "black"; //#"+ inputColor.substring(6,12);
  } else if (inputPattern == 2) {
    // inputColor = prompt("enter a " + (Math.ceil(0.5*canvasSize)) + " digit hexadecimal string");
  }

  resizeCanvas(canvasSize * pixelWidth, canvasSize * pixelWidth);

 //checkerBoard();
 //spiral();
 //diamond();
 //cross();
 //gridPattern();
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

function gridPattern() {
  stroke("yellow");
  strokeWeight(1);
  for (var i = 0; i <= canvasSize; i += 1) {
        line(i * pixelWidth, 0, i * pixelWidth, canvasSize * pixelWidth);
        line(0, i * pixelWidth, canvasSize * pixelWidth, i * pixelWidth);
  }
}