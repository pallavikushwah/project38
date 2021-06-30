var yash,yashImage;

var ground,groundImage;

var health = 0

var happy = 0

var sad = 0

function preload(){

  yashImage = loadImage("yash.png");
  
  
  chobhaImage = loadImage("chola_bhatoora.jpg");
  
  
  groundImage = loadImage("tower.png");
  
  dosaImage = loadImage("dosa.jpg");
  
  pizzaImage = loadImage("pizza.jpg");
  
  eatingSound = loadSound("eating.mp3");
  
  bhindiImage  = loadImage("bhindi.jpg");
  
  karelaImage = loadImage("karela.jpg")
}

function setup(){

  createCanvas(displayWidth-150,displayHeight-220);
  
  ground = createSprite(displayWidth/2,displayHeight/2);
  ground.addImage(groundImage);
  ground.velocityY = -3
  ground.scale = 2.08;
  
  yash = createSprite(displayWidth/2,displayHeight/2);
  yash.addImage(yashImage);
  yash.scale = 0.2;
  
  cbGroup = new Group();
  dosaGroup = new Group();
  pizzaGroup = new Group();
  bhindiGroup = new Group();
  karelaGroup = new Group();
  
  
}

function draw(){

background(1000); 
  
  
if(ground.y < 0){
 ground.y = ground.width / 2;
  
}
  
  spawncb();
  spawndosa();
  spawnpizza();
  spawnbhindi();
  spawnkarela();
  
 if(cbGroup.isTouching(yash)){
   
   cbGroup.destroyEach();
   
   eatingSound.play();
   
    happy = happy+5
   
 }
  
  if(dosaGroup.isTouching(yash)){
   
   dosaGroup.destroyEach();
    
     eatingSound.play();
   
    happy = happy+5;
    
 }

  if(pizzaGroup.isTouching(yash)){
   
   pizzaGroup.destroyEach();
    
     eatingSound.play();
   
    happy = happy+10;
    
 }
  
  if(bhindiGroup.isTouching(yash)){
   
   bhindiGroup.destroyEach();
    
     eatingSound.play();
   
    health = health+5;
    
    sad = sad+2;
    
 }

  if(karelaGroup.isTouching(yash)){
   
   karelaGroup.destroyEach();
    
     eatingSound.play();
   
    health = health+10;
    
    sad = sad+5;
    
 }
  
    if(keyDown(UP_ARROW)){
    
    yash.velocityY = -4
    
  }
  
    if(keyWentUp(UP_ARROW)){
    
    yash.velocityY = 0
    
  }
  
    if(keyDown(DOWN_ARROW)){
    
    yash.velocityY = 4
    
  }
  
    if(keyWentUp(DOWN_ARROW)){
    
    yash.velocityY = 0
    
  }
  
    if(keyDown(LEFT_ARROW)){
    
    yash.velocityX = -4
    
  }
  
    if(keyWentUp(LEFT_ARROW)){
    
    yash.velocityX = 0
    
  }
  
    if(keyDown(RIGHT_ARROW)){
    
    yash.velocityX = 4
    
  }
  
    if(keyWentUp(RIGHT_ARROW)){
    
    yash.velocityX = 0
    
  }



  
drawSprites();

 fill("black");
 textSize(15)
 text("HAPPY = "+happy,displayWidth/2 - 300,displayHeight/2 - 350);
  
 fill("red") 
 text("HEALTH = "+health,displayWidth/2,displayHeight/2 - 350); 
  
 fill("blue")
 text("SAD = "+sad,displayWidth/2 + 300,displayHeight/2 - 350)
}

function spawncb() {
 
  if (frameCount % 190 === 0) {
    var cb = createSprite(200,600,40,10);
    cb.x = Math.round(random(displayWidth/2 - 250,displayWidth/2 + 250));
    cb.addImage(chobhaImage);
    cb.scale = 0.04;
    cb.velocityY = -3;
    cbGroup.add(cb);
     
    cb.lifetime = 580;
    
    
    cb.depth = yash.depth;
    yash.depth = yash.depth + 1;
    
    
  }
  
}

function spawndosa() {
 
  if (frameCount % 200 === 0) {
    var dosa = createSprite(200,600,40,10);
    dosa.x = Math.round(random(displayWidth/2 - 250,displayWidth/2 + 250));
    dosa.addImage(dosaImage);
    dosa.scale = 0.18;
    dosa.velocityY = -3;
    dosaGroup.add(dosa);
     
    dosa.lifetime = 580;
    
    
    dosa.depth = yash.depth;
    yash.depth = yash.depth + 1;
    
    
  }
  
}

function spawnpizza() {
 
  if (frameCount % 400 === 0) {
    var pizza = createSprite(200,600,40,10);
    pizza.x = Math.round(random(displayWidth/2 - 250,displayWidth/2 + 250));
    pizza.addImage(pizzaImage);
    pizza.scale = 0.18;
    pizza.velocityY = -3;
    pizzaGroup.add(pizza);
     
    pizza.lifetime = 580;
    
    
    pizza.depth = yash.depth;
    yash.depth = yash.depth + 1;
    
    
  }
  
}

function spawnbhindi() {
 
  if (frameCount % 165 === 0) {
    var bhindi = createSprite(200,600,40,10);
    bhindi.x = Math.round(random(displayWidth/2 - 250,displayWidth/2 + 250));
    bhindi.addImage(bhindiImage);
    bhindi.scale = 0.18;
    bhindi.velocityY = -3;
    bhindiGroup.add(bhindi);
     
    bhindi.lifetime = 580;
    
    
    bhindi.depth = yash.depth;
    yash.depth = yash.depth + 1;
    
    
  }
  
}

function spawnkarela() {
 
  if (frameCount % 165 === 0) {
    var karela = createSprite(200,600,40,10);
    karela.x = Math.round(random(displayWidth/2 - 250,displayWidth/2 + 250));
    karela.addImage(karelaImage);
    karela.scale = 0.07;
    karela.velocityY = -3;
    karelaGroup.add(karela);
     
    karela.lifetime = 580;
    
    
    karela.depth = yash.depth;
    yash.depth = yash.depth + 1;
    
    
  }
  
}
