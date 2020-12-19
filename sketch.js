const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gameState = "attached";
var score = 0;
var birds = [];

function preload() {
    changeBackground();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(220,250);
    bird2 = new Bird(150, 350);
    bird3 = new Bird(100, 350);
    bird4 = new Bird(50, 350);

    birds.push(bird4);
    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird);

    sling = new Chain(birds[birds.length-1].body, {x:220, y:250});
}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    sling.display();
    platform.display();
    pig1.score();
    pig3.score();


    textSize(40);
    fill("white");
    text("Score "+score, 900, 50);
}

function mouseDragged(){
    if (gameState != "flying"){
        Matter.Body.setPosition(birds[birds.length-1].body, {x:mouseX, y:mouseY});
        Matter.Body.applyForce(birds[birds.length-1].body, birds[birds.length-1].body.position, {x:5, y:-5});
    }
}

function mouseReleased(){
    gameState = "flying";
    sling.fly();
    birds.pop();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.setPosition(birds[birds.length-1].body, {x:200, y:300});
        sling.attach(birds[birds.length-1].body);
        gameState = "attached";
        bird.trajectory = [];
        bird2.trajectory = [];
        bird3.trajectory = [];
        bird4.trajectory = [];
    }
}

async function changeBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rJSON = await response.json();
    var dt = rJSON.datetime;
    var hour = dt.slice(11,13);
    console.log(hour);
    if (hour > 6 && hour < 13){
        bg = "sprites/bg.png";
    }else {
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}