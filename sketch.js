var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  a1=createSprite(200,300,15,80)
  a2=createSprite(700,100,15,80)
  a3=createSprite(400,50,15,80)
  a4=createSprite(500,300,15,80)
  a1.shapeColor="orange"
  a2.shapeColor="orange"
  a3.shapeColor="orange"
  a4.shapeColor="orange" 
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if (isTouching(movingRect,a2)) {
movingRect.shapeColor="yellow"
fixedRect.shapeColor="pink"
}
else {
  movingRect.shapeColor="lightblue"
  fixedRect.shapeColor="lightblue"
}
  drawSprites();
}
