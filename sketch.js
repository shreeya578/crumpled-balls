
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20);
	paper=new Paper(100,660,20);
	dustbin=new Dustbin(600,670);

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70});
	}
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();
  dustbin.display();

 
}



