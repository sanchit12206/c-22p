var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fairySound=loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	
	
	fairy=createSprite(130,520,50,50);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale=0.25

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y>470&&starBody.position.x>470){
	  Matter.Body.setStatic(starBody,true);
  }

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyDown ("Down")) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("right")){
		fairy.x=fairy.x+20;
	}

	if(keyDown("left")){
		fairy.x=fairy.x-20;
	}
}
