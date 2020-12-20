const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Roof;
var bob1, bob2, bob3, bob4, bob5;
var string1;
//function preload(){}

function setup() {
	createCanvas(800,700); 

	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(210,150);//bob1 = new bob(20,350);bob2 = new bob(30,350);bob3 = new bob(40,350);bob4 = new bob(50,350);bob5 = new bob(60,350);Roof = new roof(250,15);

	bob2 = new bob(230,150);
	bob3 = new bob(250,150);
	bob4 = new bob(270,150);
	bob5 = new bob(290,150);

	string1 = new rope (bobObject.body, roofObject.body, bobDiameter*2, 0);
	Roof = new roof(250,50,200,15);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgray");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  Roof.display();
  
  drawSprites();
}



