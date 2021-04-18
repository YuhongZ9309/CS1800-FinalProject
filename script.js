var binaryInput;
var hexadecimalInput;
var pattern;
var color1;
var color2;
const re = /[0-9A-Fa-f]{12}/g;

jQuery(document).ready(function($) {
    
    $("#binarySubmit").click(function() {
        $("#binaryWarning1").hide();
        $("#binaryWarning2").hide();
        binaryInput = $("#binaryInput").val();
        if (binaryInput.length == 4) {
            for (var i = 0; i < binaryInput.length; i++) {
                if (binaryInput.substring(i,i+1) != 0 && binaryInput.substring(i,i+1) != 1) {
                    $("#binaryWarning1").show();
                    return false;
                }
            }
            binaryInput = parseInt(binaryInput,2);
            $("#binaryInput").prop("disabled", true);
            $("#binarySubmit").hide();
        } else {
             $("#binaryWarning2").show();
        }
    })
    $("#hexadecimalSubmit").click(function() {
        $("#hexadecimalWarning1").hide();
        $("#hexadecimalWarning2").hide();
        hexadecimalInput = $("#hexadecimalInput").val();
        if (hexadecimalInput.length == 12) {
            if(re.test(hexadecimalInput)) {
                $("#hexadecimalInput").prop("disabled", true);
                $("#hexadecimalSubmit").hide();
                color1 = "red"; // #"+ inputColor.substring(0,6);
                color2 = "black"; //#"+ inputColor.substring(6,12);
            } else {
                $("#hexadecimalWarning1").show();
            }
        } else {
            $("#hexadecimalWarning2").show();
        }
        
    })
    $("#patternSubmit").click(function() {
        pattern = $("#patternOption").val();
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