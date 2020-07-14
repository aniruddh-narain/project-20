function setup() {
  createCanvas(800,400);
  wall1 = createSprite(780,50,20,90);
  wall2 = createSprite(780,180,20,90);
  wall3 = createSprite(780,310,20,90);
  car1 = createSprite(40,50,20,20);
  car1.shapeColor = "white";
  car2 = createSprite(40,170,20,20);
  car2.shapeColor = "white";
  car3 = createSprite(40,300,20,20);
  car3.shapeColor = "white";

  speed = random(55,90);
  weight = random(400,1500);

  deformation = 0.5*weight*speed*speed/22500;
}

var speed,weight;
var deformation;

function draw() {
  background(0,0,0); 
  
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed; 

   if (car1.deformation < 100){
    car1.shapeColor = "green";
  }

  if(car1.deformation > 100 && car1.deformation < 180){
    car1.shapeColor = "yellow";
  }

  if(car1.deformation > 180){
    car1.shapeColor = "red";
  }

  if (car2.deformation < 100){
    car2.shapeColor = "green";
  }

  if(car2.deformation > 100 && car1.deformation < 180){
    car2.shapeColor = "yellow";
  }

  if(car2.deformation > 180){
    car2.shapeColor = "red";
  }

  if (car3.deformation < 100){
    car3.shapeColor = "green";
  }

  if(car3.deformation > 100 && car1.deformation < 180){
    car3.shapeColor = "yellow";
  }

  if(car3.deformation > 180){
    car3.shapeColor = "red";
  }

  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);
  

  //car1.bounceOff(wall1);
  //car2.bounceOff(wall2);
  //car3.bounceOff(wall3);

  drawSprites();
}