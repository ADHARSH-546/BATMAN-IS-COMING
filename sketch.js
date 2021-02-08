const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;
 var thunder;

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(400,800);
  umbrella = new Umbrella(180, 690, 225);

}

//function preload(){
  //this.image = loadImage("1.png");
  //this.image = loadImage("2.png");
  //this.image = loadImage("3.png");
  //this.image = loadImage("4.png");
//}

function draw() {
  background("black");
  umbrella.display(); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();

    
  }
}

