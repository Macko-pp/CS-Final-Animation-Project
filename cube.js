function setup() {
	createCanvas(500, 500, WEBGL);
}
function draw() {
	background(0);
	let time = millis();
	rotateX(time / 1000);
	rotateZ(time / 1234);
	rect(250, 250, 250, 250)
}
