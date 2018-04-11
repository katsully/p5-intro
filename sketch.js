// set and draw functions are p5 specific

// this gets called ONCE
function setup() {
	// creating a HTML element (canvas)
	createCanvas(800, 800);

	// red outline
	// stroke(255, 0, 0);
	// strokeWeight - thickness of stroke, takes a
	// number between 1 and 10
	// strokeWeight(5);
	// makes inside blue
	// fill(0, 0, 255);
	// ellipse(xPos, yPos, width, height)
	// ellipse(50, 50, 80, 80);

	// 100% opacity
	fill(0, 0, 255);
	// rect(xPos, yPos, width, height)
	rect(0, 0, 240, 200);

	// 75% opacity (opacity is from 0 to 255)
	fill(255, 0, 0, 191);
	rect(100, 100, 400, 400);

	// 25% opacity
	fill(0, 0, 255, 63);
	rect(300, 300, 400, 400);


}

// gets called EVERY frame
function draw() {

}