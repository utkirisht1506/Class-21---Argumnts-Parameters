

var moving, fixed , object1 , object2 ;

function setup() {
  createCanvas(1200,800);
  
  moving = createSprite(400, 600, 50, 80);
  //moving.velocityX = 4;
  //moving.velocityY = -2 ;

  fixed = createSprite(400, 200, 80, 50);
  //fixed.velocityX = -3;
  //fixed.velocityY = 2

  object1 = createSprite(200,600,60,60);
  object1.shapeColor = "orange";
  object1.velocityX = 2 ;

  object2 = createSprite(400,600,60,60);
  object2.shapeColor = "purple";
  object2.velocityX = -2 ;

  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background(0); 
 
  moving.x = mouseX;
  moving.y = mouseY;
  

    if(touch(moving, object2)){
      moving.shapeColor = "yellow";
      object2.shapeColor = "yellow";
    }
    else{
      moving.shapeColor = "blue";
      object2.shapeColor = "blue";

    }

    bounceOff(object1 , object2 );

  drawSprites();
}

/*
ALGORITHMS

  Pre-defined:
    1. isTouching - detects collision
    2. bounceOff - bouncing off objects upon collision
*/





/*
return - keyword which gives back a value to the calling function
- can also be used as a function
return(
  statement, statement2
)



ARGUMENTS vs PARAMETERS

Arguments:
  - used when function is called
  - real values
  - take some memory in the storage

Parameters:
  - used when function is created
  - not real
  - does not take any memory in the storage
  - PLACEHOLDERS for arguments


isTouching
IsTouching

camelCase
PascalCase
*/



















