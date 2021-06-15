class Player {
  constructor(playerImage) {
    console.log("Player created");
    this.x = 300;
    this.y = 200;
    this.image = playerImage;
    this.draw();
  }
  moveRight() {
    this.x += 10;
    this.draw();
  }
  moveLeft() {
    this.x -= 10;
    this.draw();
  }

  draw() {
    console.log("Drawing player");
    console.log(this.image)
    clear();
    image(playerImage, this.x, this.y);

  }
}
