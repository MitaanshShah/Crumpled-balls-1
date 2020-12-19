var ground, binLine, binLine2, binLine3, binLine3Body, binLineBody, binLine2Body;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

    binLineBody = Bodies.rectangle(600, 640, 200, 20, {isStatic:true})
	World.add(world, binLineBody)

    binLine2Body = Bodies.rectangle(500, 595, 20, 100, {isStatic:true})
	World.add(world, binLine2Body)
	
	binLine3Body = Bodies.rectangle(700, 595, 20, 100, {isStatic:true})
	World.add(world, binLine3Body)

	binLine = createSprite(binLineBody.position.x, 650, 200, 20); 
	binLine.shapeColor = "red"
	
	binLine2 = createSprite(binLine2Body.position.x, 610, 20, 100);
	binLine2.shapeColor = "red"

	binLine3 = createSprite(binLine3Body.position.x, 610, 20, 100);
	binLine3.shapeColor = "red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=("255")
	
    ball= new Ball(150, 550, 30, 30)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)
  ball.display();
  drawSprites();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:150,y:400})
	}
}




