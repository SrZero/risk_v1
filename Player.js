class Player{

  constructor(namePlayer){
    this.namePlayer = namePlayer;
    this.own_STATES = [];
    this.num_states = 0;
  }

  addState (state){
    this.own_STATES.push(state);
    this.num_states ++;
  }

  removeState (state){
    var index = null;
    for(var i = 0; i < this.own_STATES.length && index == null; i++){
      if(this.own_STATES[i] == state){
        index = i;
      }
    }
    if(index != null){
      this.own_STATES.splice(index,1);
      this.num_states --;
    }
  }

  getListStateOwned (){
    var listOfState = " ";
    for(var i = 0; i < this.own_STATES.length; i++){
      listOfState += " " + this.own_STATES[i].getName() + " ";
    }
    return listOfState;
  }

  getNum_states (){
    return this.num_states;
  }

  getNamePlayer (){
    return this.namePlayer;
  }
}
