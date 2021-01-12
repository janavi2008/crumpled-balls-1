
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(20, 20, 20)
	box1 = new Dustbin(20, 350, 20, 20)
	box2 = new Dustbin(20, 380, 20, 20)
	box3 = new Dustbin(30, 365, 20, 20)
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paper1.display(); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
};



