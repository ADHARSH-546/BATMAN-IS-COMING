rand = Math.round(random(1,4));
  if(frameCount%10 == 0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
      case 1 : thunder.addImage(1);
      break;
      case 2 : thunder.addImage(2);
      break;
      case 2 : thunder.addImage(3);
      break;
      case 2 : thunder.addImage(4);
      break;
      default:break;
    }
    //thunder.scale = random(0.3,0.6)
  }

