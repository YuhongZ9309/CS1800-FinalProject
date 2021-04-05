 /// var canvasSize = 257;
//  var pattern;
//  var pixelWidth = 40;

  var checkerColor1;
  var checkerColor2;

  

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
     inputPixel = prompt("enter a 8 bit binary number");
    canvasSize = parseInt(inputPixel, 2);
  pixelWidth = (640/canvasSize);
     inputPattern = prompt("enter a number 1")
   if (inputPattern == 1) {
     inputColor = prompt("enter a 12 digit hexadecimal string");
     checkerColor1 = "#"+ inputColor.substring(0,6);
     checkerColor2 = "#"+ inputColor.substring(6,12);
   } else if (inputPattern == 2) {
     // inputColor = prompt("enter a " + (Math.ceil(0.5*canvasSize)) + " digit hexadecimal string");
   }
    
    resizeCanvas(canvasSize * pixelWidth, canvasSize * pixelWidth);
    
  checkerBoard();
  }

  function draw() {
 console.log(pixelWidth + "," + canvasSize )
    
  //if (inputPattern == 1) {
  //  
 // } else if (inputPattern == 2) {
   // spiral();
  //}

    

  }

  function checkerBoard() {
    for (var i = 0; i < canvasSize * pixelWidth; i += 1) {
      for (var j = 0; j < canvasSize * pixelWidth; j += 1) {
        if ((j % canvasSize)%2 == (i % canvasSize)%2) { 
          push();
          fill(checkerColor1);
          rect(j*pixelWidth, i*pixelWidth, pixelWidth, pixelWidth)
          pop();
        } else {
          push();
          fill(checkerColor2);
          rect(j*pixelWidth, i*pixelWidth, pixelWidth, pixelWidth);
          pop();
        }
      }
    }

  }

  function spiral() {
    var rectSize = canvasSize-1;
    background(255);
    for (i =pixelWidth/2; i < Math.ceil(canvasSize / 2) * pixelWidth; i += pixelWidth) {
      push();
      stroke(i*0.7); //color of the border
      noFill();
      strokeWeight(pixelWidth);
      rect(i, i, (pixelWidth * (rectSize)), (pixelWidth * (rectSize)));
      rectSize-= 2;
      
      pop();
    }
   // rect(i+pixelWidth/2, i+pixelWidth/2, rectSize), (pixelWidth * (canvasSize - times)));
    

  }