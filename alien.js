// variables!

// declaring the variable
// initializing the variable
var x = 0;

function setup() {
	createCanvas(800, 800);

	// removes the outline of our shapes
	// noStroke();

	// // body
	// fill(0,128,128);
	// // xPos and yPos are upper left corner
	// rect(200, 100, 40, 200);

	// // head
	// fill(107,142,35);
	// // xPos and yPos are center of ellipse
	// ellipse(220, 75, 175, 50);

	// // eyes
	// fill(0);
	// ellipse(175, 70, 20, 20);
	// ellipse(265, 70, 20, 20);

	// // arc(x,y,w,h,start,stop,[mode])
	// arc(220, 80, 40, 20, 0, PI);

	// // legs
	// // line(x1,y1,x2,y2)
	// strokeWeight(5);
	// stroke(0);
	// line(210, 300, 210, 350);
	// line(230, 300, 230, 350);

	// line(170, 0, 170, 52);
	// line(170, 0, 170, 52);
	// line(270, 0, 270, 52);
}

function draw() {
	background(255, 0, 0);

	// mouseIsPressed another reserved
	// if(mouseIsPressed) {
	// 	fill(0,255,0);
	// } else {
	// 	fill(0,0,255);
	// }


	// height is a reserved word
	ellipse(x, height/2, 80, 80);
	x = x + 2

	if(x > 840) {
		x = -40
	}
}