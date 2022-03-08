const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var block1,block2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

	//prop. of objects
	 var block1Proprierties = {
		 restituition : 0.1,
         frictionAir : 0.01
	 }

	  var block2Proprierties = {
		  restituition : 0.1,
          frictionAir : 0.09
	  }

	   var ballProprierties = {
		   restituition : 1,
           frictionAir : 0.01
	   }

	    var fixedObjProprierties = {
		    isStatic : true
	    }

	//Objects.
    ball = Bodies.circle(200,150,60,ballProprierties);
    World.add(world,ball);
    
	 block1 = Bodies.rectangle(250,10,50,50,block1Proprierties);
     World.add(world,block1);
	  
	  block2 = Bodies.rectangle(350,10,80,50,block2Proprierties);
      World.add(world,block2);
	   
	   ground = Bodies.rectangle(500,700,1000,50,fixedObjProprierties);
       World.add(world,ground);
	
	
	
	
}

function draw() {
  rectMode(CENTER);
   ellipseMode(RADIUS);
    background(0);
     Engine.update(engine);
  
  fill("red");
   ellipse(ball.position.x,ball.position.y,60);
    rect(block1.position.x,block1.position.y,50,50);
     rect(block2.position.x,block2.position.y,80,50);
      fill("green");
	   rect(ground.position.x,ground.position.y,1000,50);
}



