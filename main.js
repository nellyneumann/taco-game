
const game = new Game();

function preload() {
	console.log("main preload")
	
	game.preload()
}

function setup() {
	console.log("setup")
	createCanvas(1200, 1000);
	game.setup();
}

function draw() {
	game.draw();
	if (keyIsDown(LEFT_ARROW)) {
		game.player.moveLeft();
	  }

	  if (keyIsDown(RIGHT_ARROW)) {
		game.player.moveRight();
	  }
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump();
	}
}