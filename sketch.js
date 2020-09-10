var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle1,obstacle5,obstacle2,obstacle4,obstacle6,obstacle3
var clouds1
var obstaclegroup
var cloudsgroup

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle6=loadImage("obstacle6.png")
  obstacle3=loadImage("obstacle3.png")
  clouds1=loadImage("cloud.png")
}

function setup() {
  createCanvas(displayWidth-20, displayHeight - 30);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  obstaclegroup=new Group()
  clouds1group=new Group()
}

function draw() {
  background(255);
  
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
  }}
display(){
  this.title.html("trex");
  this.title.position(displayWidth/2 - 50,0);
  this.input.position(displayWidth/2 - 50,displayHeight/2-80);
  this.title.position(displayWidth/2 + 30,displayHeight/2);
  if(keyDown("space")) {
    trex.velocityY = -10;
    this.input.hide();
    this.button.hide();
    trex = this.input.value();
    trex += 1;
    trex.update();
    this.greating.html("hello"+ trex )
    this.greating.position(displayWidth/2 - 70,displayheight/4)
    camera.position.x=displayWidth/2;
    camera.position.y=trex[index-1].y;
}
FunctionspawnClouds ();{
if(frameCount%60===0){
var clouds= createSprite(600,120,20,20);
clouds.y= random(80,120);
clouds.addImage(clouds1);
clouds.scale=0.5;
clouds.velocityX=-3;
clouds.lifetime=200;
trex.depth=clouds.depth+1;
}
}
function spawnObstacles () {
if(frameCount%60===0){
var obstacle= createSprite(600,120,20,20)
obstacle.velocityX= -6
var rand=Math.round(random(1,6))
switch(rand){
  case 1:obstacle.addImage(obstacle1);
  break;
  case 2:obstacle.addImage(obstacle2);
  break;
  case 3:obstacle.addImage(obstacle3);
  break;
  case 4:obstacle.addImage(obstacle4);
  break;
  case 5:obstacle.addImage(obstacle6);
  break;
  case 6:obstacle.addImage(obstacle6);
  break;
  default:
  break; 
}
}
}
  
   
   