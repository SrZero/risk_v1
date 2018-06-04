
const num_starting_units = 10;

class Player{

  constructor(namePlayer){
    this.namePlayer = namePlayer;
    this.own_STATES = [];
    this.num_states = 0;
    this.num_tot_units = num_starting_units;
  }
  setUpStartingUnits () {
    var deployableUnits = this.num_tot_units;
    for(var i = 0; i < this.own_STATES.length; i++){
      if(deployableUnits > 0){
      var aux = Math.ceil(Math.random() * (deployableUnits - 1)) + 1;
      this.own_STATES[i].deployUnits(aux);
      deployableUnits -= aux;
      }
    }
    //FIXARE : alcuni paesi possono avere 0 unita e non va bene.
    if(deployableUnits > 0){
      var r_index = Math.ceil(Math.random() * (this.own_STATES.length - 1))
      this.own_STATES[r_index].deployUnits(deployableUnits);
    }
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
