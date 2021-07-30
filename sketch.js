var shipImg,ship ,edges;
var seaImg;

var sea;


function preload(){
  seaImg=loadImage("sea.png")

  shipImg=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(600,400);

sea = createSprite(200,180,400,20)
sea.addImage(seaImg)
ship = createSprite(50,290,20,50);
ship.addAnimation("running", shipImg);


ship.scale = 0.25;





}

function draw() {
  //background("red");
  sea.velocityX=-5
  if (sea.x<0) {
    sea.x=sea.width/2
  }
  drawSprites();
//preload()

//setup()
}