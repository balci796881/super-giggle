var level = 0;
var gameState = "Intro"
var button1,button2,button3,button4,button5,subject;
var classroom,math,english,law,history,science;
var bg;
function preload(){
 classroom = loadImage("background.png")
  math=loadImage("math.jpg")
  english=loadImage("english.jpg")
  history=loadImage("english.jpg")
  law=loadImage("law.jpg")
  science=loadImage("science.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(0,0,windowWidth*5,windowHeight*5)
  bg.addImage(classroom)
   bg.scale = 11
  bg.visible = false; 
  subject = createGroup()
  button1 = createSprite(windowWidth/3,0,windowWidth,windowHeight/5);
  button2 = createSprite(windowWidth/3,windowHeight/5,windowWidth,windowHeight/5)
  button3 = createSprite(windowWidth/3,windowHeight/5*2,windowWidth,windowHeight/5)
  button4 = createSprite(windowWidth/3,windowHeight/5*3,windowWidth,windowHeight/5)
  button5 = createSprite(windowWidth/3,windowHeight/5*4,windowWidth,windowHeight/5)
  subject.add(button1)
  subject.add(button2)
  subject.add(button3)
  subject.add(button4)
  subject.add(button5)
  subject.setVisibleEach(false);
}
function draw(){
  if(level===0){
  background(0)
  fill("green")
  textSize(20)
 text("AnyDreams",windowWidth/2-100,windowHeight/4);
 text("press Space to continue",windowHeight/2+200,windowHeight/3)
 if(keyDown("space")){
  level = 1
}
  }
  if(level===1){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(math); 
    button2.addImage(english);
    button2.scale = 0.5;
    button3.addImage(science);
    button4.addImage("history",history);
    button5.addImage(law);
    
  }
  drawSprites();
  console.log(level);
}