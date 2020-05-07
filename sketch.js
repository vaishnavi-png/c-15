const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1;
var log1,log2,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);

    bird = new Bird(100,100);
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    bird.display();
}