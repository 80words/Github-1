var pathImg,path
var runnerImg, runner
var boundary1, boundary2
var edges




function preload(){
  //pre-load images
pathImg=loadImage("path.png")
runnerImg=loadAnimation("Runner-1.png","Runner-2.png")




}

function setup(){
  createCanvas(400,400);
  //create sprites here
createEdgeSprites
boundary1=createSprite(0,200,40,400)
boundary2=createSprite(400,200,40,400)


path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2

runner=createSprite(300,200,10,10)
runner.addAnimation("runner",runnerImg)
runner.scale=0.08


}

function draw() {
  background(0);
  path.velocityY=4
if (path.y>400) {
path.y=height/2
}
runner.x=World.mouseX

runner.collide(boundary1)
runner.collide(boundary2)

boundary1.visible=false

boundary2.visible=false
drawSprites();
}
