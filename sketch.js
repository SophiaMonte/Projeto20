
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ground1;
var circulo, quadrado, recta;



function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic: true
	};
	  
	var circle_options={
		restitution : 0.6,
		friction : 0.2,
		frictionAir : 0.4,
	};
	
	var quadrado_options={
		restitution : 0.7,
		friction : 0.3,
		frictionAir : 0.2,
	}

	var rect_options={
		restitution : 0.3,
		friction : 0.5,
		frictionAir : 0.1,
	};
	
	circulo = Bodies.circle(220, 10, 10, circle_options);
	World.add(world,circulo);

	quadrado = Bodies.rectangle(110, 50, 10, 10, quadrado_options);
	World.add(world,quadrado);

	recta = Bodies.rectangle(350, 50, 10, 10, rect_options);
	World.add(world,recta);

	ground1 = Bodies.rectangle(500, 480, 1000, 10, ground_options);
	World.add(world,ground1);

	rectMode(CENTER); 
    ellipseMode(RADIUS);

}


function draw() {
  background(0);
  Engine.update(engine);

  
  ellipse(circulo.position.x, circulo.position.y, 10);
  rect(ground1.position.x, ground1.position.y, 1000, 10);
  rect(recta.position.x, recta.position.y, 10, 10);
  rect(quadrado.position.x, quadrado.position.y, 10, 10);
 
}



