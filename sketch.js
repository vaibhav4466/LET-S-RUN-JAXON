var LOADING=0;
var START=1;
var PLAY=2;
var OVER=3;
var WIN=4;
var gameState=0;

var img, img1;
var line1, line2;
var line3, line4;
var jake, jake_running;
var invisiblePath1, invisiblePath2;
var bomb, bomb1;
var coin, coin1;
var energyDrink, energyDrink1;
var power, power1;


function preload(){
    //pre-load images
    jake_running = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png"); 
    img1 = loadImage("Let's RUN JAXON.jpg");
    bomb1 = loadImage("bomb.png");
    coin1 = loadImage("coin.png");
    energyDrink1 = loadImage("energyDrink.png");
    power1 = loadImage("power.png");
}

function setup(){
    createCanvas(363, 520);
  
    //create sprites here
  
    jake = createSprite(200, 475, 20, 20);
    jake.addAnimation("running", jake_running);
    jake.scale = 0.5;
     
    bomb = createSprite(200, 100, 20, 20);
    bomb.addImage(bomb1);
    bomb.scale = 0.12;
  
    coin = createSprite(200, 180, 20, 20);
    coin.addImage(coin1);
    coin.scale = 0.3;
  
    energyDrink = createSprite(250, 200, 20, 20);
    energyDrink.addImage(energyDrink1);
    energyDrink.scale = 0.15;
  
    power = createSprite(200, 320, 20, 20);
    power.addImage(power1);
    power.scale = 0.5;

    invisiblePath1 = createSprite(10, 260, 28, 520);
    invisiblePath1.visible = false;
    invisiblePath2 = createSprite(366, 260, 45, 520);
    invisiblePath2.visible = false;
    
}

function draw() {
    background("black");
  
    if(gameState === LOADING){
      createCanvas(370, 496);
      createLoading();
      drawSprites();
      if(World.frameCount%80===0){
       gameState = START; 
      }
    }
    
    if(gameState === START){
    fill("red");
    textSize(20);
    text("PRESS  'SPACE'  TO  START",50,250);
    if(keyDown("space")){
    gameState = PLAY;
    }
    }  
  
    if(gameState === PLAY){
    createCanvas(363, 520);
    background("black");
    console.log(jake.x);
    createEdgeSprites();

    
    createLine1();
    createLine2();
    createLine3();
    createLine4();
  
    jake.x = mouseX;
    jake.collide(invisiblePath1);
    jake.collide(invisiblePath2);
    if(jake.x < 43){
      jake.x = 43;
    }
    if(jake.x > 321){
      jake.x = 321;
    }
  
    drawSprites();
    }  
}
   
function createLoading(){
   img = createSprite(185, 248, 10, 10);
   img.addImage(img1);
   img.scale = 0.6;
   img.lifetime = 15;
}

function createLine1(){
  if(World.frameCount%40===0){  
  line1 = createSprite(11, 260, 20, 520);
  line1.shapeColor = "white";
  }  
}

function createLine2(){
  if(World.frameCount%40===0){  
  line2 = createSprite(352, 260, 20, 520);
  line2.shapeColor = "white";
  }  
}

function createLine3(){
  if(World.frameCount%40===0){  
    line3 = createSprite(122, -40, 10, 77.5);
    line3.shapeColor = "white";
    line3.velocityY = 4; 
    line3.lifetime = 150;
    line3.depth = jake.depth;
    jake.depth = line3.depth + 4;
    }
}

function createLine4(){
  if(World.frameCount%40===0){  
    line4 = createSprite(244, -40, 10, 77.5);
    line4.shapeColor = "white";
    line4.velocityY = 4; 
    line4.lifetime = 150;  
    line4.depth = jake.depth;
    jake.depth = line4.depth + 4;
    }
}




