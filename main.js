
const game = new Game();

function preload() {	
	game.preload()
}

function setup() {
	createCanvas(1200, 800);
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

