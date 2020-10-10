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