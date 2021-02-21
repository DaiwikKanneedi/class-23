const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    iBox= new Box(100, 300);
    SteveBox=new Box(140, 100);
    iground=new Ground();
    var ground_options ={
        isStatic: true
    }
console.log(SteveBox);

    //ground = Bodies.rectangle(width/2,height-100,width,20,ground_options);
    //World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

   // ball = Bodies.circle(200,100,20, ball_options);
   // World.add(world,ball);

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,width,20);
    fill("yellow")
    iBox.display();
    fill("red")
    SteveBox.display();
    iground.display();
   // ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}