class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    super.display();
    if (this.body.velocity.x > 10 && this.body.position.x > 240){
      var p = [this.body.position.x, this.body.position.y];
      this.trajectory.push(p);
    }
    for(var x=0;x < this.trajectory.length; x++){
      image(this.smoke, this.trajectory[x][0], this.trajectory[x][1]);
    }
  }
}
