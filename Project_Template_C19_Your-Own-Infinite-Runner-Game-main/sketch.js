var bombImg ;   var starImg ; var rocketImg ;  var spaceImg ;

var starGroup  ;  ; var bombGroup ;  var score ;

 var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score ;



var gameOverImg;
var restartImg


function preload(){

bombImg =  loadImage ("bomb.png") ;

rocketImg =  loadImage ("rocket.png") ;

starImg =  loadImage ("star.png") ;

spaceImg = loadImage ("space2.jpeg")

restartImg = loadImage("restart.png")

gameOverImg = loadImage("gameOver.png")





}

function setup() {

createCanvas(600,600);

starGroup = new Group () ;
 bombGroup = new Group () ;  

    //space create & add animation  & velocity
     
      space2  = createSprite ( 300,300) ;
      space2.addImage("space",spaceImg) ;
    space2.velocityY = 2;


      rocket = createSprite ( 300,400)
      rocket.addImage("rocket",rocketImg) ;
       rocket.scale = 0.5 ; 

      
score = 0 ;
   
}
function draw() {

  background(200);
  text("Score: "+ score, 500,70);
  score.color = red
  score = score + Math.round(frameCount/60);

  spawnStar () ;
  spawnBomb () ;


  // play state 
  if(gameState === PLAY){

    if(bombGroup.isTouching(rocket)){
    lifeOver();
  gameState = END;
    }
   rocket.x = World.mouseX;
       
rocket.velocityY = rocket.velocityY + 0.5 

if(space2.y > 400){
  space2.y = 100   
 }
 
if(keyDown("space")){
  rocket.velocityY = -10;
}


}



  if (gameState === END) {
   
  
      gameOver.visible = true;
     restart.visible = true;
   
    ground.velocityX = 0;
    trex.velocityY = 0;
    starGroup.setLifetimeEach(-1);
    bombGroup.setLifetimeEach(-1);

  
   starGroup.setVelocityXEach(0);
   bombGroup.setVelocityXEach(0);


  
 

}


            

drawSprites();



}




 
function  spawnBomb() {
  
  if (frameCount % 270 === 0) {
    bomb = createSprite(400,10,40,10);
    bomb.x = Math.round(random(300,50));
    bomb.addImage(bombImg);
    bomb.scale = 0.15;
    bomb.velocityY = 2;
    
     
 bomb.lifetime = 250;
bombGroup.add(bomb)

  }
  
    }

    
function  spawnStar() {
  
  if (frameCount % 130 === 0) {
    star = createSprite(50);
    star.x = Math.round(random(380,100));
    star.addImage(starImg);
    star.scale = 0.15;
    star.velocityY = 2;
  
     
 star.lifetime = 250;
starGroup.add(star)

  }
  
}
space2.depth = score.depth;
space2.depth = score.depth + 1;
