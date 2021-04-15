var color1;
var color2;
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
  var array = [];
  for (var row = 0; row < canvasSize; row++) {
    var arrayRow = [];
    for (var col = 0; col < canvasSize; col++) {
      arrayRow.push(color1);
    }
    array.push(arrayRow);
  }
  console.table(array);
  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array[i].length; j += 1) {
      if ((j % 2) == (i % 2)) {
        push();
        array[i][j] = color1;
        fill(array[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth)
        pop();
      } else {
        push();
        array[i][j] = color2;
        fill(array[i][j]);
        rect(j * pixelWidth, i * pixelWidth, pixelWidth, pixelWidth);
        pop();
      }
    }
  }
  console.table(array);



}

function spiral() {
  var rectSize = canvasSize - 1;
  background(255);
  for (i = pixelWidth / 2; i < Math.ceil(canvasSize / 2) * pixelWidth; i += pixelWidth) {
    push();
    stroke(i * 0.7); //color of the border
    noFill();
    strokeWeight(pixelWidth);
    rect(i, i, (pixelWidth * (rectSize)), (pixelWidth * (rectSize)));
    rectSize -= 2;

    pop();
  }
  // rect(i+pixelWidth/2, i+pixelWidth/2, rectSize), (pixelWidth * (canvasSize - times)));

}