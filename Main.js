
var canvas, ctxTop;
var canvasRect;
var xPosition = 0;
var yPosition = 0;

window.onload = function() {
  window.addEventListener("click", getClickPosition, false);
  canvas = document.getElementById('canvasTop');
  canvas.width = canvasTop.width;
  canvas.height = canvasTop.height;
  ctxTop = canvas.getContext('2d');
  ctxTop.fillStyle="#FF0000";
  canvasRect = canvas.getBoundingClientRect();
}

//HANDLER PATH CLASS
 state_path_handler = new StatePathHandler();

//STATES
var STATES  = [];

s1 = new State( state_path_handler.getUsaPath(), "usa");
STATES.push(s1);


function getClickPosition(e) {
     xPosition = e.clientX - canvasRect.left;
     yPosition = e.clientY - canvasRect.top;

     if(ctxTop.isPointInPath(s1.getPath(), xPosition, yPosition)){
       console.log("in " + s1.getName());
     }else console.log("out " + s1.getName());

     xPosition = 0;  
     yPosition = 0;
}


function update(delta){

}

function draw(){
      ctxTop.clearRect(0, 0, canvas.width, canvas.height);
      s1.draw();
}


var lastRender = 0;
function loop(timeStap){

  var delta = timeStap - lastRender;

  update(delta);
  draw();


  lastRender = timeStap;
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
