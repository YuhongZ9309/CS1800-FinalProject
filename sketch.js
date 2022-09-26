var grid;
var canvasSize;
var pixelWidth;
var inputPattern;

function setup() {
  noStroke();
}

function checkerBoard() {
  createArray(); // call createArray() to create array grid
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
      if ((j % 2) == (i % 2)) { // if j and i are both even or odd, then that pixel in grid[i][j] is color1
        grid[i][j] = color1;
      } else { // else pixel in grid[i][j] is color2
        grid[i][j] = color2;
      }
    }
  }
  drawArray(); // call drawArray() to draw out all the pixel squares 
}

function spiral() {
  // Spiral pattern is different as it doesn't require the array. It's just a smaller square drawn ontop of a bigger square with alternating colors
  createArray(); // Purpose to is create the canvas and set values of the variables needed
  for (var i = 0; i < canvasSize / 2; i += 1) { 
    if (i % 2 == 0) {
      fill(color1);
    } else {
      fill(color2);
    }
    rect(i * pixelWidth, i * pixelWidth, pixelWidth * (canvasSize - i - i), pixelWidth * (canvasSize - i - i)); // draws the square onto the canvas
  }
}

function diamond() {
  // we use modulus so we can create a repeating pattern
  createArray(); //call createArray() to create array grid
  for (var i = 0; i < grid.length; i += 1) { // iterates through the rows
    for (var j = 0; j < grid[i].length; j += 1) { // iterates through the columns
      if (i % 8 == 0) { // if its the first row
        if ((j % 6) == 3) { // and if its the 4rd columns
          grid[i][j] = color1;  // that pixel will be color1
        } else {
          grid[i][j] = color2; // else that pixel will be color2
        }
      } else if (i % 8 == 1) { // if its the second row
        if ((j % 6) == 2 || (j % 6) == 3 || (j % 6) == 4) {  // and if its the 3rd or 4th or 5th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 2) { // if its the 3rd row
        if ((j % 6) == 1 || (j % 6) == 2 || (j % 6) == 4 || (j % 6) == 5) { // and if its the or 2nd or 3rd 5th or 6th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 3) { // if its the 4th row
        if ((j % 6) == 0 || (j % 6) == 1 || (j % 6) == 5) { // and if its the 1st or 2nd or 6th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 4) { // if its the 5th row
        if ((j % 6) == 0) {  // and if its the 1st columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 5) { // if its the 6th row
        if ((j % 6) == 0 || (j % 6) == 1 || (j % 6) == 5) { // and if its the 1st or 2nd or 6th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 6) { // if its the 7th row
        if ((j % 6) == 1 || (j % 6) == 2 || (j % 6) == 4 || (j % 6) == 5) { // and if its the 2nd or 3rd 5th or 6th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 7) { // if its the 8th row
        if ((j % 6) == 2 || (j % 6) == 3 || (j % 6) == 4) { // and if its the 3rd or 4th or 5th columns 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } 
    }
  }
  drawArray(); // call drawArray() to draw out all the pixel squares 
}

function cross() {
  // we use modulus so we can create a repeating pattern
  createArray(); //call createArray() to create array grid
  for (var i = 0; i < grid.length; i += 1) { // iterates through the rows
    for (var j = 0; j < grid[i].length; j += 1) { // iterates through the columns
      if (i % 8 == 0) { // if its the first row
        if ((j % 4) == 0) { 
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 1) { // if its the first row
        if ((j % 8) == 2 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 2) { // if its the second row
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 3) { // if its the third row
        if ((j % 8) == 2 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 4) { // if its the 4th row
        if ((j % 4) == 0) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 5) { // if its the 5th row
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 6) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 6) { // if its the 6th row
        if ((j % 8) == 1 || (j % 8) == 2 || (j % 8) == 3 || (j % 8) == 5 || (j % 8) == 6 || (j % 8) == 7) {
          grid[i][j] = color1;
        } else {
          grid[i][j] = color2;
        }
      } else if (i % 8 == 7) { // if its the 7th row
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
  pixelWidth = Math.round(1000/ canvasSize); //rounds the pixelWidth value to avoid weird lines
  createCanvas(canvasSize * pixelWidth, canvasSize * pixelWidth).parent('drawing'); // create canvas
  
  grid = []; 
  // create a grid[16][16] with all elements being color1
  // all elements in the array basically represent a pixel square in the image
  for (var row = 0; row < canvasSize; row++) {
    var gridRow = []; 
    for (var col = 0; col < canvasSize; col++) {
      gridRow.push(color1); 
    }
    grid.push(gridRow); 
  }
}

function drawArray() {
  // draws every element in array grid into a pixel squre
  for (var i = 0; i < grid.length; i += 1) {
    for (var j = 0; j < grid[i].length; j += 1) {
        fill(grid[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth);
    }
  }
}

