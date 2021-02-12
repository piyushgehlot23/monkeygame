
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var groundImg;
var invisibleground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  score = 0;
 
}



function setup() {
  createCanvas(500,400);
  
  
   monkey = createSprite(80,326,20,20);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale = 0.1;
  
   ground = createSprite(200,360,600,10);
   ground.velocityX = -4;
   ground.x = ground.width/2;
  
  
  invisibleground = createSprite(80,360,600,10)
  invisibleground.visible = false;
 
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
   
  
}


function draw() {
background("white")
  

 if(ground.x<200){
    ground.x = ground.width/2;
    }
   
  
  if(keyDown("space")&&monkey.y>320){
     monkey.velocityY = - 16;
     }
   monkey.velocityY = monkey.velocityY+0.8;
   monkey.collide(invisibleground);
  
   scoringSystem();
   creatingBanana();
   creatingobstacles();
  
  
  
drawSprites();  
 

}

 function scoringSystem(){
   
   var survivalTime = 0;
   stroke("white");
   textSize(20);
   fill("white");
   
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime = Math.ceil(frameCount/frameRate());
   text("survival Time: "+ survivalTime,100,50);
   
 }

 function creatingBanana(){
  
  if(frameCount%80===0){
     banana = createSprite(600,120,40,10);
     banana.y = Math.round(random(120,200))
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -4;
     banana.lifetime = 200;
     bananaGroup.add(banana);
    
     }
  
}

function creatingobstacles(){
  
    if (frameCount % 300 === 0) {
      obstacle = createSprite(600,320,40,10);
      obstacle.addImage(obstaceImage);
      obstacle.scale = 0.19;
      obstacle.velocityX = -4;
      obstacle.lifetime = 200;
      obstacleGroup.add(obstacle);
   }
  
  
  
}




 