var rec,rec1;

function setup() {
  createCanvas(1200,600);
rec =createSprite(400,400,50,50);
rec.shapeColor="yellow";
rec1=createSprite(100,100,50,50);
rec1.shapeColor="yellow";
}

function draw() {
  background(0);  

rec1.x=World.mouseX;
rec1.y=World.mouseY;

if(rec.x-rec1.x<rec.width/2+rec1.width/2 && rec1.x-rec.x<rec.width/2+rec1.width/2 &&
   rec.y-rec1.y<rec.height/2+rec1.height/2 && rec1.y-rec.y<rec.height/2+rec1.height/2){
rec.shapeColor="green";
rec1.shapeColor="blue";
}
else{
  rec.shapeColor="yellow";
  rec1.shapeColor="yellow";
}


  drawSprites();
}