class State{

  constructor(sate_path, name, player){
    this.sate_path = sate_path;

    this.name = name;
    this.player = player;
    this.border_States = [];
    this.player.addState(this);
    this.num_units = 0;

  }

  deployUnits (numOfUnitsDeploying){
    this.num_units += numOfUnitsDeploying;
  }

  getNumUnits () {
    return this.num_units;
  }

  //adding state (as obj) to the border list
  setUpBorders (v_STATES) {
    switch (this.name) {
      case "state_ALASKA":
        for(var i = 0; i < v_STATES.length; i++)
        if(v_STATES[i].getName() == "state_ALBERTA" ||
           v_STATES[i].getName() == "state_NORTHWEST")
        this.border_States.push(v_STATES[i]);
        break;
        case "state_NORTHWEST":
          for(var i = 0; i < v_STATES.length; i++)
          if(v_STATES[i].getName() == "state_ALASKA" ||
             v_STATES[i].getName() == "state_ALBERTA" ||
             v_STATES[i].getName() == "state_ONTARIO")
          this.border_States.push(v_STATES[i]);
          break;
        case "state_ALBERTA":
          for(var i = 0; i < v_STATES.length; i++)
          if(v_STATES[i].getName() == "state_ALASKA" ||
             v_STATES[i].getName() == "state_NORTHWEST" ||
             v_STATES[i].getName() == "state_WESTERNUS" ||
             v_STATES[i].getName() == "state_ONTARIO")
          this.border_States.push(v_STATES[i]);
          break;
        case "state_ONTARIO":
          for(var i = 0; i < v_STATES.length; i++)
          if(v_STATES[i].getName() == "state_NORTHWEST" ||
             v_STATES[i].getName() == "state_ALBERTA" ||
             v_STATES[i].getName() == "state_WESTERNUS")
          this.border_States.push(v_STATES[i]);
          break;
        case "state_WESTERNUS":
          for(var i = 0; i < v_STATES.length; i++)
          if(v_STATES[i].getName() == "state_ALBERTA" ||
             v_STATES[i].getName() == "state_ONTARIO")
          this.border_States.push(v_STATES[i]);
          break;
      default:

    }
  }

  getBorderStatesList () {
    var listOfBorderState = " ";
    for(var i = 0; i < this.border_States.length; i++){
      listOfBorderState += " " + this.border_States[i].getName() +
                          "...." + this.border_States[i].getPlayerOwener().getNamePlayer();
    }
    return listOfBorderState;
  }
  getName (){
    return this.name;
  }
  getPlayerOwener (){
    return this.player;
  }

  draw (){
    if(this.player == player1){
      ctxTop.fillStyle="#FF0000";
    }else if (this.player == player2) {
      ctxTop.fillStyle="#2A00FF";
    }else if (this.player == player3) {
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
