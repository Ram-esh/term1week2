
/*function animate(){

	var circle = document.getElementById('circle');	
	var opacity = parseFloat(circle.style.opacity);
	if (opacity < 1) { 
	
		circle.style.opacity = opacity + 0.01;
	}
}

function clickFunction(){
	setInterval(animate, 50);
}



function mainFunction() {
var circle = document.getElementById('circle');
circle.addEventListener('click',clickFunction);
circle.style.opacity = '0.2';
}
document.addEventListener('DOMContentLoaded',mainFunction);*/


function moveLeft(){
	var circle = document.getElementById('circle');
	var currentleft = parseInt(circle.offsetLeft);
	circle.style.left = currentleft  - 10 + 'px';
}
function moveRight(){
	var circle = document.getElementById('circle');
	var currentleft = parseInt(circle.offsetLeft);
	circle.style.left = currentleft  +10 + 'px';
}
function moveUp(){
	var circle = document.getElementById('circle');
	var currentleft = parseInt(circle.offsetTop);
	circle.style.top = currentleft  -10 + 'px';
}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentleft = parseInt(circle.offsetTop);
	circle.style.top = currentleft  +10 + 'px';
}
var interval ;
function moveCircle(event){
	if(event.keyCode == 37){
		interval = setInterval (moveLeft, 5);
	}
	if(event.keyCode == 39){
		interval = setInterval (moveRight,5);
	}
	if(event.keyCode == 38){
		interval = setInterval(moveUp, 5);
	}
	if(event.keyCode == 40){
		interval = setInterval(moveDown, 5);
	}


}



function mainFunction(){
	var circle = document.getElementById('circle');
	document.addEventListener('keydown',moveCircle);


}
document.addEventListener('DOMContentLoaded',mainFunction);