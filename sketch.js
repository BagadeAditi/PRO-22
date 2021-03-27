var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	//starBody=new Star();
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.rectangle(650 , 30 , 20 , 20,{ isStatic:true});
	World.add(world, starBody);
	
	//
  	//star.x=starBody.position.x
  	//star.y=starBody.position.y
	

}


function draw() {
  background(bgImg);
	Engine.update(engine);
	Engine.run(engine);
	  if(star.y>440){
		  Body.setState(starBody,true)
	  }
  	drawSprites();
	
}

function keyPressed() {
	//write code here
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-24
	}

	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+24
	}

	if(keyCode===DOWN_ARROW){
		//star.velocityY=5
		Body.setState(starBody,false)
	}
}
