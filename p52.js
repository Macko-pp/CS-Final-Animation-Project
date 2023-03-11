function setup() {
	angleMode(DEGREES);
	cnv = createCanvas(500, 500);
}

let img;
let backgroundImg;
let ship;
let laser;
function preload() {
	asteroid = loadImage("asteroid.png");
	backgroundImg = loadImage("space.jpg");
	ship = loadImage("ship.png");
	laser = loadImage("laser.png");
}

let x = 250;
let i = 400;

let aX = 0;
let aY = 0;
let aW = 50;
let aH = 50;

let bX = 450;
let bY = 0;
let bW = 50;
let bH = 50;

let shot = false;
let x21;
let x22;
let c = 255;
let c2 = 255;

function draw() {
	background(backgroundImg)

	fill(c) 
	image(asteroid, aX, aY, aW, aH);
	fill(255)
	fill(c2) 
	image(asteroid, bX, bY, bW, bH);
	fill(255)

	if (aY <= i && i <= (aY + aH) && x21 >= aX && x21 <= (aX + aW)) {
		aX = random(0, 250);
		aY = random(0, 250);
	} else {
		aX += 1.5;
		aY += 1.5;
	}
	
	if (bY <= i && i <= (bY + bH) && x22 >= bX && x22 <= (bX + bW)) {
		bX = random(250, 500);
		bY = random(0, 250);
	} else {
		bX -= 1.5;
		bY += 1.5;
	}

	if (aY >= 500 && bY >= 500) {
		fill(255, 0, 0);
		textSize(50)
		text("YOU LOOSE!", 100, 250)
	}
	
	image(ship, x, 400, 50, 60);

	if (keyIsPressed === true && keyCode === LEFT_ARROW) {
		x -= 5;
	} else if (keyIsPressed === true && keyCode === RIGHT_ARROW) {
		x += 5;
	}

	if (keyCode == 32) {
		x21 = x+18;
		x22 = x+27;
		shot = true;
	}

	if (shot) {
		image(laser, x21, i, 5, 20);
		image(laser, x22, i, 5, 20);
		if (i <= 0) {
			i = 400;

			shot = false;
			// keyCode = 1;
		} else {
			i -= 10;
		}
	}
}