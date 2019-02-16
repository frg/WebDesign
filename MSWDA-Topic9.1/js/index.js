// JavaScript Document
document.addEventListener("keypress", function onPress(event) {
	"use strict";
	var x = event.which || event.keyCode;
	var key = event.key;
  	document.getElementById("unicode").innerHTML = key + " (Key Code = " + x + ")";
    
});