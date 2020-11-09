var fixedrect, movingrect;
var bObj1, bobj2;



function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);

/*
fixedrect = createSprite(200, 200, 50, 80);
movingrect = createSprite(400, 200, 80, 50);

movingrect.velocityX = -5;
fixedrect.velocityX = 5;
*/
bObj1 = createSprite(400, 50, 50, 80);
bobj2 = createSprite(400, 350, 80, 50);

bobj2.velocityY = -5;
bObj1.velocityY =5;


  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background(0);
  movingrect.x = mouseX;
  movingrect.y = mouseY;

if(isTouching(movingrect, fixedrect)){
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}
else{
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

bounceOff(bObj1,bobj2);



  drawSprites();
}

