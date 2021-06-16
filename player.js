class Player {
  constructor(img) {
    console.log("Player created");
    this.x = 100;
    this.y = 700;
    this.image = img;
  }
  moveRight() {
    if (this.x < 1080) {
      this.x += 10;
    }
  }
  moveLeft() {
    if (this.x > 10) {
      this.x -= 10;
    }
  }

  getX() {
    return this.x;
  }

  draw() {
    //console.log("Drawing player");
    image(this.image, this.x, this.y, 120, 90);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Ingredient {
  constructor(img) {
    console.log("ingredient created");
    this.x = getRandomInt(600);
    this.y = -100;
    this.image = img;
    this.speed = 3;
  }

  /**
   * Moves down the ingredient by the speed velocity.
   * If it reaches y == 700, it checks if its x value
   * is 
   * @param {*} x 
   */
  moveDown(x) {
    if (this.y >= 700) {
      if (Math.abs(this.x - x) <= 40) {
        this.y = -100;
        this.x = getRandomInt(800);
        this.speed = getRandomInt(3) + 3;
        document.querySelector("#points").innerHTML++;
      } 
    }
    if (this.y >= 900) {
      this.y = -100;
      this.x = getRandomInt(800);
      this.speed = getRandomInt(6) + 3;
    }
    this.y += this.speed;
  }

  draw(x) {
    //console.log("Drawing player");
    image(this.image, this.x, this.y, 120, 90);
    this.moveDown(x);
  }
}
