function touch(pen, book){

    //COLLISION ALGORITHM
  
    if(pen.x - book.x <= book.width/2 + pen.width/2
      && book.x - pen.x <= book.width/2 + pen.width/2 
      && pen.y - book.y <= book.height/2 + pen.height/2
      && book.y - pen.y <= book.height/2 + pen.height/2
      ){
  
        //True
  
        return true ;
  
    }
    else{
        //False
  
        return false ;
    }
  
  }
  
  function bounceOff(sprite1 , sprite2){
  
    //BOUNCE ALGORITHM
  
    if (sprite1.x - sprite2.x <= sprite2.width/2 + sprite1.width/2
      && sprite2.x - sprite1.x <= sprite2.width/2 + sprite1.width/2 
      ){
  
        sprite2.velocityX = - sprite2.velocityX ;
        sprite1.velocityX = - sprite1.velocityX ;
  
    }
     if( sprite1.y - sprite2.y <= sprite2.height/2 + sprite1.height/2
      && sprite2.y - sprite1.y <= sprite2.height/2 + sprite1.height/2){
  
        sprite2.velocityY = - sprite2.velocityY ;
        sprite1.velocityY = - sprite1.velocityY ;
  
      }
  
  }