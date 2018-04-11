var x = 0;
var y = 0;
var step = 1;

function setup() {
	createCanvas(800, 800);
}

function draw() {

	background(255);

	// removes the outline of our shapes
	noStroke();

	// body
	fill(0,128,128);
	// xPos and yPos are upper left corner
	rect(x+200, y+100, 40, 200);

	// head
	fill(107,142,35);
	// xPos and yPos are center of ellipse
	ellipse(x+220, y+75, 175, 50);

	// eyes
	fill(0);
	ellipse(x+175, y+70, 20, 20);
	ellipse(x+265, y+70, 20, 20);

	// arc(x,y,w,h,start,stop,[mode])
	arc(x+220, y+80, 40, 20, 0, PI);

	// legs
	// line(x1,y1,x2,y2)
	strokeWeight(5);
	stroke(0);
	line(x+210, y+300, x+210, y+350);
	line(x+230, y+300, x+230, y+350);

	line(x+170, y+0, x+170, y+52);
	line(x+270, y+0, x+270, y+52);

	x = x+step
	y = y+step

	if(x > 50) {
		step = -1;
	}

	if( x < -50) {
		step = 1
	}

}