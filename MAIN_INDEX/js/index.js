setTimeout(function(){
			var element = document.getElementById("revealer__text");
			element.outerHTML = "";
			delete element;
		}, 5000);
//after 7 secomd deletes "HELLO"

setTimeout(function(){
			$("#main-content").css("display","flex");
			$("#background2").css("opacity", "1");
			$("#background1").css("opacity", "1");
		}, 5500);

function hover1(){
	$("#background2").css("background-color", "#8EADAD");
	$("#right").css("opacity", "0");
}

function hover2(){
	$("#background1").css("background-color", "#253E49");
	$("#left").css("opacity", "0");
}

function hover_res(){
	$("#background1").css("background-color", "#8EADAD");
	$("#background2").css("background-color", "#253E49");
	$("#right").css("opacity", "1");
	$("#left").css("opacity", "1");
}

function hover_be(){
	$("#background1").css("background-color", "#2ab573");
	$("#background2").css("background-color", "#2ab573");
}

function hover_ben(){
	$("#background1").css("background-color", "#8EADAD");
	$("#background2").css("background-color", "#253E49");
}

var clicks_special = 0;
function clikker() {
  	clicks_special++;
  	if (clicks_special == 5) {
    	alert("I ❤ coding!");
    	clicks_special = 0;
  	}
}