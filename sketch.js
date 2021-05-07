
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var paper
var dustbin1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground =new Ground(400,650,800,20)
paper= new ball (100,500,40)
dustbin1= new dustbin(600,500,300,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();
 ground.display()
 paper.display()
 dustbin1.display()


}
function keyPressed(){
	if (keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-150})
	}
}


