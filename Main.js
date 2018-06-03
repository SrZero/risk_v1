
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
  ctxTop.lineWidth=3;
  canvasRect = canvas.getBoundingClientRect();
}

//HANDLER PATH CLASS
 state_path_handler = new StatePathHandler();

 player1 = new Player("pippo");
 player2 = new Player("pluto");
 player3 = new Player("bob");

//STATES
var STATES  = [];

state_ALASKA = new State( state_path_handler.getstate_path_ALASKA(),
                       "state_ALASKA",
                       player3);
STATES.push(state_ALASKA);

state_NORTHWEST = new State( state_path_handler.getstate_path_NORTHWEST(),
                       "state_NORTHWEST",
                       player2);
STATES.push(state_NORTHWEST);

state_ALBERTA = new State( state_path_handler.getstate_path_ALBERTA(),
                       "state_ALBERTA",
                       player1);
STATES.push(state_ALBERTA);

state_ONTARIO = new State( state_path_handler.getstate_path_ONTARIO(),
                       "state_ONTARIO",
                       player2);
STATES.push(state_ONTARIO);

state_WESTERNUS = new State( state_path_handler.getstate_path_WESTERNUS(),
                       "state_WESTERNUS",
                       player3);
STATES.push(state_WESTERNUS);


//once all states are made ,set up their border

for(var i = 0; i < STATES.length; i++){
  STATES[i].setUpBorders(STATES);
}


function getClickPosition(e) {
     xPosition = e.clientX - canvasRect.left;
     yPosition = e.clientY - canvasRect.top;

     for(var i = 0; i < STATES.length; i++){
       if(ctxTop.isPointInPath(STATES[i].getPath(), xPosition, yPosition)){
         console.log("in " + STATES[i].getName());
        console.log("BORDER : " + STATES[i].getBorderStatesList());
       }
     }
     xPosition = 0;
     yPosition = 0;


}


function update(delta){

}

function draw(){
      ctxTop.clearRect(0, 0, canvas.width, canvas.height);
       for(var i = 0; i < STATES.length; i++){
         STATES[i].draw();
       }
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
