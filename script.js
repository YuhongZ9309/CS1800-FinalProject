var binaryInput;
var hexadecimalInput;
var pattern;
var color1;
var color2;
const re = /[0-9A-Fa-f]{2}/g;

jQuery(document).ready(function($) {
    $("#binarySubmit").click(function() {
        binaryInput = $("#binaryInput").val();
        if (binaryInput.length == 4) {
            for (var i = 0; i < binaryInput.length; i++) {
                if (binaryInput.substring(i,i+1) != 0 && binaryInput.substring(i,i+1) != 1) {
                    alert("Please enter in binary only!");
                    return false;
                }
            }
            binaryInput = parseInt(binaryInput,2);
            alert("YES " + binaryInput);
            $("#binaryInput").prop("disabled", true);
            $("#binarySubmit").hide();
        } else {
            alert("Please enter an 4 bit binary!");
        }
    })
    $("#hexadecimalSubmit").click(function() {
        hexadecimalInput = $("#hexadecimalInput").val();
        if(re.test(hexadecimalInput)) {
            alert('valid hex' + hexadecimalInput);
            $("#hexadecimalInput").prop("disabled", true);
            $("#hexadecimalSubmit").hide();
            color1 = "red"; // #"+ inputColor.substring(0,6);
            color2 = "black"; //#"+ inputColor.substring(6,12);
        } else {
            if (hexadecimalInput.length == 12) {
                alert("Please enter in hexadecimal only!");
            } else {
                alert("Please enter a 12 hexadecimal string");
            }
        }
    })
    $("#patternSubmit").click(function() {
        pattern = $("#patternOption").val();
        alert(pattern);
        if (pattern == 1) {
            checkerBoard();
        } else if (pattern == 2) {
            spiral();
        } else if (pattern == 3) {
            diamond();
        } else if (pattern == 4) {
            cross();
        }
    })

	
});