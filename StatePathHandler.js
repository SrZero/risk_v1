class StatePathHandler{

  constructor (){
    this.path_USA = new Path2D(); // usa

    //todo : 
    this.p2 = new Path2D(); // china
    this.p3 = new Path2D(); // eu
    this.p4 = new Path2D(); // africa


    // USA Path
    this.path_USA.moveTo(10,10);
    this.path_USA.lineTo(100,10);
    this.path_USA.lineTo(140,30);
    this.path_USA.lineTo(180,15);
    this.path_USA.lineTo(180,25);
    this.path_USA.lineTo(150,80);
    this.path_USA.lineTo(130,90);
    this.path_USA.lineTo(60,85);
    this.path_USA.lineTo(40,70);
    this.path_USA.lineTo(20,40);
    this.path_USA.closePath();

  }

getUsaPath(){
  return this.path_USA;
}


}
