var binaryInput;
var hexadecimalInput;
var binaryInputStatus = false;
var hexadecimalInputStatus = false;
var pattern;
var color1;
var color2;
const re = /[0-9A-Fa-f]{12}/g;

jQuery(document).ready(function($) {
    
    $("#binarySubmit").click(function() {
        $("#binaryWarning1").hide();
        $("#binaryWarning2").hide();
        binaryInput = $("#binaryInput").val();
        if (binaryInput.length == 8) {
            for (var i = 0; i < binaryInput.length; i++) {
                if (binaryInput.substring(i,i+1) != 0 && binaryInput.substring(i,i+1) != 1) {
                    $("#binaryWarning1").show();
                    return false;
                }
            }
            binaryInput = parseInt(binaryInput,2);
            $("#binaryInput").prop("disabled", true);
            $("#binarySubmit").hide();
            binaryInputStatus = true;
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
                hexadecimalInputStatus = true; 
                color1 = "#"+ hexadecimalInput.substring(0,6);
                color2 = "#"+ hexadecimalInput.substring(6,12);
            } else {
                $("#hexadecimalWarning1").show();
            }
        } else {
            $("#hexadecimalWarning2").show();
        }
        
    })
    $("#patternSubmit").click(function() {
        if (binaryInputStatus == true && hexadecimalInputStatus == true) {
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
        } else {
            if (binaryInputStatus == false) {
                $("#binaryWarning2").show();
            }
            if (hexadecimalInputStatus == false) {
                $("#hexadecimalWarning2").show();
            }

        }
        
    })
    $("#patternReset").click(function() {
        $("#binaryInput").val("");
        $("#hexadecimalInput").val("");
        $("#binaryInput").prop("disabled", false);
        $("#hexadecimalInput").prop("disabled", false);
        $("#binaryWarning1").hide();
        $("#hexadecimalWarning1").hide();
        $("#binaryWarning2").hide();
        $("#hexadecimalWarning2").hide();
        $("#binarySubmit").show();
        $("#hexadecimalSubmit").show();
        setup();
    })

	
});