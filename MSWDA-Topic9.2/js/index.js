window.onload = addListeners();

function addListeners(){
	"use strict";
	document.getElementById('box').addEventListener('mousedown', mouseDown, false);
	document.getElementById('dot').addEventListener('mousedown', dotClick, false);
	window.addEventListener('mouseup', mouseUp, false);
	window.addEventListener('mouseup', dotUnclick, false);
}

function mouseUp()
{
	"use strict";
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(){
	"use strict";
	window.addEventListener('mousemove', divMove, true);
}

function dotUnclick()
{
	"use strict";
    window.removeEventListener('keypress', dropDot, true);
}

function dotClick(){
	"use strict";
	window.addEventListener('keypress', dropDot, true);

}

function divMove(e){
	"use strict";
	var div = document.getElementById('box');
	div.style.position = 'absolute';
	div.style.top = e.clientY + 'px';
	div.style.left = e.clientX + 'px';
}


function dropDot() {
	"use strict";
	var dot = document.getElementById('dot');
	dot.style.animation = 'none';
	void dot.offsetHeight; /* trigger reflow */
	// dot.style.animation = null; 
	dot.style.animation = 'dropBall 5s 1';
	dot.style.position = 'relative';
}