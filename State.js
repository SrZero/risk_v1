class State{

  constructor(sate_path, name, player){
    this.sate_path = sate_path;
    this.ctxTop = ctxTop;
    this.name = name;
    this.player = player;
  }

  getName (){
    return this.name;
  }

  draw (){
    if(this.player == "player1"){
      ctxTop.fillStyle="#FF0000";
    }else if (this.player == "player2") {
      ctxTop.fillStyle="#2A00FF";
    }else if (this.player == "player3") {
      ctxTop.fillStyle="#FFE900";
    }
    ctxTop.fill(this.sate_path);
    ctxTop.strokeStyle="#000000";
    ctxTop.stroke(this.sate_path);
  }

  getPath (){
    return this.sate_path;
  }
}
