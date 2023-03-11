let cnv;
let x = -26;
let d = 500;
let h = 50;
let w = 50;

function setup() {
	angleMode(DEGREES);
	cnv = createCanvas(500, 500);
	cnv.mouseClicked(shoot);
}

let img;
function preload() {
	img = loadImage("DVD.jpg");
}

function draw() {
	background(200)

	let slope = (250 - mouseY) / (250 - mouseX)
	angle = Math.atan(slope) * (180 / Math.PI);

	text(mouseX, 250, 10)
	text(mouseY, 250, 20)
	text(angle, 250, 30)
	
	translate(width / 2, height / 2);
	rotate(angle);
	rect(x, -26, 52, 52);
	line(-100, -0, 100, 0)	
}

function mouseClicked() {
	// i += 10;
	let a;
	while (a <= 300) {
		x++
		a++
	}
}

function shoot() {
	for (var a; a <= 300; a++) {
		x++;
		d--;
	}
}