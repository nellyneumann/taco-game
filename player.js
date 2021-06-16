class Player {
  constructor(img) {
    console.log("Player created");
    this.x = 100;
    this.y = 500;
    this.image = img;
  }
  moveRight() {
    this.x += 10;
  }
  moveLeft() {
    this.x -= 10;
  }

  draw() {
    //console.log("Drawing player");
    clear();
    image(this.image, this.x, this.y, 120, 90)

  }
}
