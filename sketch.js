//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
var rock;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.99,
    frictionAir: 0.01,
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world, ball);

  console.log(ball);

  var ground_options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(0,390,800,20,ground_options);
  World.add(world, ground);


  var rock_options = {
    restitution: 0.5
  }

  rock = Bodies.circle(300,20,30,rock_options);
  World.add(world, rock);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  fill("red");
  ellipse(ball.position.x, ball.position.y, 20, 20);
  
  fill("green");
  rect(ground.position.x, ground.position.y, 800,20);

  fill("blue");
  ellipse(rock.position.x, rock.position.y, 30,30);

  

  



 
}

