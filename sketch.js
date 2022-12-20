var backImg;
var santa, santaImg;
var gift, gifts;
var Divyansh, DivyanshImg;
var Aryansh, AryanshImg;
var edges;
var canvas;
var g1, g2, g3, g4, g5;

function preload() {
backImg = loadImage("BG1.jpg");    
santaImg = loadImage("Santa.png");
g1 = loadImage("g1.png");
g2 = loadImage("g2.png");
g3 = loadImage("g3.png");
g4 = loadImage("g4.png");
g5 = loadImage("g5.png");

   DivyanshImg = loadImage("Div1.png");     
       


   AryanshImg = loadImage("Ary1.png");     

}



function setup() {
        canvas = createCanvas(900, 500);
       
     santa = createSprite(200,180,40,20);
      santa.addImage("Santa", santaImg);
      santa.velocityX = 3;
      santa.scale = 0.3;

     Divyansh = createSprite(60,400, 10, 10);
     Divyansh.addImage("Divyansh", DivyanshImg);
     Divyansh.scale = 0.4;
    
     Aryansh = createSprite(790, 400, 10, 10 );
     Aryansh.addImage("Aryansh", AryanshImg);
     Aryansh.scale = 0.4;


    edges = createEdgeSprites();

    gifts = createGroup();


}

function draw() {
    background("yellow");
    image(backImg, 0, 0, width, height)

    
  santa.bounceOff(edges);
 


    if (keyDown("LEFT_ARROW")) 
    {
     Aryansh.x = Aryansh.x - 3;
    }

    if (keyDown("RIGHT_ARROW")) 
    {
     Aryansh.x = Aryansh.x + 3;
    }

    
    if (keyDown("UP_ARROW")) 
    {
     Aryansh.y = Aryansh.y - 10;
    }

    if (keyDown("a")) 
    {
     Divyansh.x = Divyansh.x - 3;
    }

    if (keyDown("d")) 
    {
     Divyansh.x = Divyansh.x + 3;
    }

    if (keyDown("space")) 
    {
     Divyansh.y = Divyansh.y - 10;
    }

    Divyansh.addGravity();
    Aryansh.addGravity();

   
    //spawnGifts();  


    drawSprites();
  }
 
function spawnGifts(){
    if (frameCount % 60 === 0){
      gift = createSprite(400,165,10,40);
      gift.x = santa.x;
      
       //generate random gift
       var rand = Math.round(random(1,5));
       switch(rand) {
         case 1: gift.addImage("g1", g1);
                 break;
         case 2: gift.addImage("g2", g2);
                 break;
         case 3: gift.addImage("g3", g3);
                 break;
         case 4: gift.addImage("g4", g4);
                 break;
         case 5: gift.addImage("g5", g5);
                 break;
        default: break;
         
       }
      
       //assign scale and lifetime to the gift           
       gift.scale = 0.5;
       gift.lifetime = 300;
      
      //add each gift to the group
       gifts.add(gift);
    }
   }

  


   
 
 
 
   