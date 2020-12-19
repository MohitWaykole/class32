class Chain{
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(option);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.body);
    }

    display(){
        image(this.image1, 230, 225);
        image(this.image2, 200, 225);
        push();
        if (this.body.bodyA){
        var b = this.body.bodyA.position;
        var b2 = this.pointB;
        stroke(42, 22, 8);
        if (b.x < 250){
        strokeWeight(5);
        line(b.x-20, b.y, b2.x-10, b2.y);
        line(b.x-20, b.y, b2.x+30, b2.y);
        image(this.image3, b.x-30, b.y-10, 15, 30);
        }
        else {
        strokeWeight(3);
        line(b.x+25, b.y, b2.x-10, b2.y);
        line(b.x+25, b.y, b2.x+30, b2.y);
        image(this.image3, b.x+25, b.y-10, 15, 30); 
        }
        }
        pop();
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }
}