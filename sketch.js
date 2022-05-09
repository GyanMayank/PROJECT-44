var bg, bgImg;
var candy, candyImg;
var candyScore;
var scoringLabel;

function preload(){
  bgImg=loadImage("background.png")
  candyImg=loadImage("candy-removebg.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  bg=createSprite(width/2,height/2, width,height)
  bg.addImage("bg",bgImg)
  bg.scale=0.5

  candy=createSprite(width/2-50,height/2,20,20)
  candy.addImage("candy",candyImg)
  candy.scale=1.3

  scoringLabel=createSprite(1460,50,500,100)
  scoringLabel.shapeColor=rgb(59,59,59)

  
}

function draw(){
  drawSprites()
}