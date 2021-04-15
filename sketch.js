var i

var w,h

var Xvel

var Yvel


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var conviteter1;
var conviteter2;
var conviteter3;
var conviteter4;


var daroad;
var daground;

var obstacleImage,obstacle

function preload(){

  conviteter1 = loadImage("images/car1.png")
  conviteter2 = loadImage("images/car2.png")
 conviteter3 = loadImage("images/car3.png")
  conviteter4 = loadImage("images/car4.png")

  daroad = loadImage("images/track.jpg")
  daground = loadImage("images/ground.png")

   obstacleImage = loadImage("images/images.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
for(i=0;i<5;i++){
  w=random(200,950)
  h=random(-height*4,height-300)
  obstacle = createSprite(w,h)
  obstacle.addImage(obstacleImage)
}

  Xvel=0
  Yvel=0
 
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
   game.end();

  }
}
