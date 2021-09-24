const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var particles=[];
var plinkos=[];
var division=[];
var divisionsheight=300;



function setup() {
  createCanvas(498,790);
  background(159,122,208);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(400,690,800,20);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75));
  }
 

  for(var k = 0; k<=width;k = k + 80){
    division.push(new Division(k,height-divisionsheight/2,10,divisionsheight));
  }
 
}

function draw() {
  Engine.update(engine);
  ground.display(); 

  for(var k = 0; k<division.length;k++) {
    division[k].display();
  }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
}
