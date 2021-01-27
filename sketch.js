var canvas;
//create 4 blocks
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //
    block1.shapeColor = rgb(0,0,255);

    //
    block2.shapeColor = rgb(255,128,0);

    //
    block3.shapeColor = rgb(153,0,76);

    //
    block4.shapeColor = rgb(0,100,0);

    //create ball with random x pos
    ball.shapeColor = rgb(255,255,255);
   //assign velocities

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
   //make ball bounce off edges

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        //play music
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
      
        //stop music and stop balls movement
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
