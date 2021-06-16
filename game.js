class Game {
  constructor() {
    this.backgroundImage;
    this.playerImage;
  }

  preload() {
	  
    this.backgroundImage = loadImage("assets/background.png");
    this.playerImage = loadImage("assets/taco.png");
	console.log(this.backgroundImage)
  }

  setup() {
    this.player = new Player(this.playerImage);
  }

  draw(){

	clear();
	this.player.draw();
	image(this.backgroundImage, 0, 0, 800, 800);
	
	console.log(this.playerImage)
  }
}
