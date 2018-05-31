class State{

  constructor(sate_path, name){
    this.sate_path = sate_path;
    this.ctxTop = ctxTop;
    this.name = name;

  }

  getName (){
    return this.name;
  }

  draw (){
    ctxTop.fill(this.sate_path);
  }

  getPath (){
    return this.sate_path;
  }
}
