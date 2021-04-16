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
  canvasSize = 16;
  parseInt(inputPixel, 2);
  pixelWidth = (640 / canvasSize);
  inputPattern = 1; //prompt("enter a number 1")
  if (inputPattern == 1) {
    // inputColor = prompt("enter a 12 digit hexadecimal string");
    color1 = "red"; // #"+ inputColor.substring(0,6);
    color2 = "black"; //#"+ inputColor.substring(6,12);
  } else if (inputPattern == 2) {
    // inputColor = prompt("enter a " + (Math.ceil(0.5*canvasSize)) + " digit hexadecimal string");
  }

  resizeCanvas(canvasSize * pixelWidth, canvasSize * pixelWidth);

  checkerBoard();
}

function checkerBoard() {
  grid = [];
  for (var row = 0; row < canvasSize; row++) {
    var gridRow = [];
    for (var col = 0; col < canvasSize; col++) {
      gridRow.push(color1);
    }
    grid.push(gridRow);
  }
  console.table(grid);
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
      if ((j % 2) == (i % 2)) {
        push();
        grid[i][j] = color1;
        fill(grid[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth)
        pop();
      } else {
        push();
        grid[i][j] = color2;
        fill(grid[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth);
        pop();
      }
    }
  }
  console.table(grid);



}

function spiral() {
  

}
//function createArray 