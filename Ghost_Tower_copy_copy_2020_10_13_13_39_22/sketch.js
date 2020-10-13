var ghost, ghostImg;
var bg, bgImg;
var door, doorImg;
var doorG;
var gameStates;
var spooky;

function preload(){
    ghostImg=loadImage("ghost.png");

    bgImg=loadImage("tower.png");

    doorImg=loadImage("door.png");

    spooky=loadSound("spooky.wav")
}

function setup(){



    createCanvas(600,600);

    bg=createSprite(300,300,20,20);;
    bg.addImage("tower",bgImg);
    bg.velocityY=4;

    ghost= createSprite(300,300,20,20);
    ghost.addImage("ghost",ghostImg);
    ghost.scale = 0.5;

    doorG= new Group();

    gameStates ='play'
}

function draw(){

spooky.play();

if (gameStates === 'play'){
    background('white');

    if (bg.y>600){
        bg.y= 300;
    }

    if (keyDown('Space')){
        ghost.velocityY=-3;
    }

    if (keyDown('left')){
        ghost.velocityX=-3;
    }

    if (keyDown('right')){
        ghost.velocityX=3;
    }

    ghost.velocityY=ghost.velocityY+0.5;

    if (ghost.isTouching(doorG)|| ghost.y>600){

        gameStates='end'

    }

    spawnDoor();

    drawSprites();
}

else if (gameStates==='end'){

    background('black');
    fill ('white');
    textSize(50)
    text("Game Over",150,300);
    ghost.destroy();
    bg.destroy();
    doorG.destroyEach();
    dooeG.setVelocityYEach(0);

}

}



function spawnDoor (){
    var rand;
    rand= random(100,500);

    if (frameCount%200===0){
    door=createSprite(rand,0,10,10);
    door.addImage("door",doorImg);
    door.velocityY=4;
    doorG.add(door)
    }
    
}