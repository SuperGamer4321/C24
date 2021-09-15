const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var ground,bgImg,tower,cannon,cannonball;
var balls
function preload() {
  bgImg = loadImage("./assets/background.gif")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,580,1200,20);

  tower = new Tower(160,350,160,310);
  
  angleMode(DEGREES)
  angle = 20 ;

  cannon = new Cannon(180,110,130,100,angle);

  balls = [];
  

  //cannonball = new CannonBall(cannon.x,cannon.y)
}

function draw() {
  background(189);

  image(bgImg,0,0,1200,600);

  tower.display();

  cannon.display();
  
  //balls[0].display,balls[1] ,.... balls[length-1]
  for( i = 0 ;i <= balls.length-1 ; i += 1){
      showCannonBalls(balls[i],i);
      //ball[0] ==>
  }
  Engine.update(engine);
  
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
      balls[balls.length-1].shoot();
    }
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
   cannonball = new CannonBall(cannon.x,cannon.y);
   balls.push(cannonball)
   //balls.push(new CannonBall(cannon.x,cannon.y))
  }
}

function showCannonBalls(ball,index){
  
  if(ball.body.position.x >  width || ball.body.position.y > height -60){
    World.remove(world,ball);
    balls.splice(index,1)
  }

  if(ball){
    ball.display();
  }
  
}
