var fixedrect,movingrect;
var gameobjects1,gameobjects2,gameobject3,gameobject4;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(250,300,20,40);
  fixedrect.shapeColor="red";
  movingrect=createSprite(350,250,40,20);
  movingrect.shapeColor="green";
  gameobjects1=createSprite(30,45,30,50);
  gameobjects1.shapeColor="yellow";
  gameobjects2=createSprite(80,45,30,50);
  gameobjects2.shapeColor="yellow";
  gameobjects3=createSprite(130,45,30,50);
  gameobjects3.shapeColor="yellow";
  gameobjects4=createSprite(170,45,30,50);
  gameobjects4.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,gameobjects1)){
    movingrect.shapeColor="blue";
    gameobjects1.shapeColor="blue";
  }
  else{
    movingrect.shapeColor="green";
    gameobjects1.shapeColor="red";
  }
 
}
function isTouching(objects1,objects2){
  if(objects1.x-objects2.x< objects2.width/2 + objects1.width/2
    &&objects2.x-objects1.x< objects2.width/2 + objects1.width/2
    &&objects1.y-objects2.y< objects2.height/2 + objects1.height/2
    &&objects2.y-objects1.y< objects2.height/2 + objects1.height/2){
    return true;
  }
  else{
   return false;
  }
}
//boolean value
//boolean value in a computer languages, it is true or false