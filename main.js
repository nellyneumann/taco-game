
const game = new Game();

function preload() {
	console.log("main preload")
	img = loadImage('./assets/background.png');
	playerImage = loadImage("./assets/tortilla.gif")
}

function setup() {
	console.log("setup")
	createCanvas(800, 800);
	game.setup(playerImage);
}

function draw() {
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