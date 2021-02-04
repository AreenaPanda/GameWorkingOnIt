var canvas;


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();

  //createSprite(400, 200, 50, 50);
 /* fireMan = createSprite(250,250,10,10);
  fireMan.shapeColor = "red";
  var fireMan=database.ref("fireMan/position")
  fireMan.on("value",readposition,showerror)*/
}

function draw() {
  background(255,255,255);  

  /*text(mouseX + "," +mouseY,mouseX,mouseY)

  if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
  }*/
  drawSprites();
}

/*function readposition(data){
  position=data.val()
  fireMan.x=position.x;
  fireMan.y=position.y;
}

function showerror(){
  console.log("errors")
}
function writePosition(x,y){
  database.ref("ball/position").set({
      x:fireMan.x+x,
      y:fireMan.y+y
  })
}*/
