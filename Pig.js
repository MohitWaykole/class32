class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }

  display(){
    if (this.body.speed < 3){
      super.display();
    }else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y);
      pop();
    }
  }

  score(){
    if (this.visibility < 0 && this.visibility > -1255){
      score = score + 1;
    }
  }
}