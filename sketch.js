var sea,sea_image
var ship ,ship_floating;
function preload(){
  ship_floating=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  ground_image=loadImage("sea.png")
}


function setup(){
  createCanvas(1900,1000);

  
  edges=createEdgeSprites()
 
  sea=createSprite(300,190,200,20)
  sea.velocityX=-4
  sea.addImage("moving",ground_image)
  ship= createSprite(100,260,20,20)
  ship.addAnimation("floating",ship_floating)
  ship.scale=0.25
  
}

function draw() {
  background("blue");
 drawSprites();
 ship.collide.bottomEdge
 if (sea.x<0) {
  sea.x=sea.width/2
}
if(keyIsDown(DOWN_ARROW)){
ship.y= ship.y +6
}
if(keyIsDown(UP_ARROW)){
  ship.y= ship.y -6
  }
  
}