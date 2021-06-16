class Game {
  constructor() {
    this.backgroundImage;
    this.playerImage;
    this.ingredientImageMeat;
  }

  preload() {
    this.backgroundImage = loadImage("assets/background.png");
    this.playerImage = loadImage("assets/tortilla.gif");
    this.ingredientImageMeat = loadImage("assets/beef.png");
    this.ingredientImagePineapple = loadImage("assets/pineapple.png");
    this.ingredientImageKoriander = loadImage("assets/koriander.png");

    console.log(this.backgroundImage);
  }

  setup() {
    this.player = new Player(this.playerImage);
    this.ingredientMeat = new Ingredient(this.ingredientImageMeat);
    this.ingredientPineapple = new Ingredient(this.ingredientImagePineapple);
    this.ingredientKoriander = new Ingredient(this.ingredientImageKoriander);
  }

  draw() {
    clear();

    image(this.backgroundImage, 0, 0, 1200, 800);
    this.player.draw();
    this.ingredientMeat.draw(this.player.getX());
    this.ingredientPineapple.draw(this.player.getX());
    this.ingredientKoriander.draw(this.player.getX());
  }
}
