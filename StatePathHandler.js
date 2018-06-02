const offsetX = 0;
const offsetY = 0;

class StatePathHandler{

  constructor (){
    this.path_ALASKA = new Path2D(); // ALASKA
    this.path_NORTHWEST = new Path2D(); // NORTHWEST
    this.path_ALBERTA = new Path2D(); // NORTHWEST
    this.path_ONTARIO = new Path2D(); // ONTARIO
    this.path_WESTERNUS = new Path2D(); // WESTERNUS
    //todo :

    this.p3 = new Path2D(); // eu
    this.p4 = new Path2D(); // africa


    // ALASKA PATH
    this.path_ALASKA.moveTo(50 + offsetX,145 + offsetY);
    this.path_ALASKA.lineTo(95 + offsetX,130 + offsetY);
    this.path_ALASKA.lineTo(160 + offsetX,145 + offsetY);//3
    this.path_ALASKA.lineTo(160 + offsetX,210 + offsetY);//4
    this.path_ALASKA.lineTo(200 + offsetX,255 + offsetY);//5
    this.path_ALASKA.lineTo(185 + offsetX,255 + offsetY);
    this.path_ALASKA.lineTo(140 + offsetX,215 + offsetY);
    this.path_ALASKA.lineTo(95 + offsetX,210 + offsetY);
    this.path_ALASKA.lineTo(40 + offsetX,248 + offsetY);
    this.path_ALASKA.lineTo(35 + offsetX,177 + offsetY);
    this.path_ALASKA.closePath();

    // NORTHWEST PATH
    this.path_NORTHWEST.moveTo(161 + offsetX,145 + offsetY);
    this.path_NORTHWEST.lineTo(260 + offsetX,140 + offsetY);
    this.path_NORTHWEST.lineTo(322 + offsetX,165 + offsetY);
    this.path_NORTHWEST.lineTo(330 + offsetX,160 + offsetY);
    this.path_NORTHWEST.lineTo(360 + offsetX,162 + offsetY);
    this.path_NORTHWEST.lineTo(358 + offsetX,223 + offsetY);
    this.path_NORTHWEST.lineTo(161 + offsetX,210 + offsetY);
    this.path_NORTHWEST.closePath();

    // ALBERTA PATH
    this.path_ALBERTA.moveTo(162 + offsetX,212 + offsetY);
    this.path_ALBERTA.lineTo(333 + offsetX,223 + offsetY);//ont
    this.path_ALBERTA.lineTo(327 + offsetX,296 + offsetY);
    this.path_ALBERTA.lineTo(215 + offsetX,292 + offsetY);//wes
    this.path_ALBERTA.lineTo(202 + offsetX,255 + offsetY);
    this.path_ALBERTA.closePath();

    // ONTARIO PATH
    this.path_ONTARIO.moveTo(335 + offsetX,223 + offsetY);
    this.path_ONTARIO.lineTo(372 + offsetX,226 + offsetY);
    this.path_ONTARIO.lineTo(381 + offsetX,245 + offsetY);
    this.path_ONTARIO.lineTo(427 + offsetX,262 + offsetY);
    this.path_ONTARIO.lineTo(434 + offsetX,286 + offsetY);
    this.path_ONTARIO.lineTo(434 + offsetX,319 + offsetY);
    this.path_ONTARIO.lineTo(372 + offsetX,296 + offsetY);
    this.path_ONTARIO.lineTo(329 + offsetX,296 + offsetY);
    this.path_ONTARIO.closePath();

    //WESTERNUS PATH
    this.path_WESTERNUS.moveTo(215 + offsetX,294 + offsetY);
    this.path_WESTERNUS.lineTo(327 + offsetX,298 + offsetY);
    this.path_WESTERNUS.lineTo(360 + offsetX,298 + offsetY);
    this.path_WESTERNUS.lineTo(356 + offsetX,356 + offsetY);
    this.path_WESTERNUS.lineTo(327 + offsetX,357 + offsetY);
    this.path_WESTERNUS.lineTo(300 + offsetX,408 + offsetY);
    this.path_WESTERNUS.lineTo(225 + offsetX,392 + offsetY);
    this.path_WESTERNUS.lineTo(212 + offsetX,362 + offsetY);
    this.path_WESTERNUS.lineTo(207 + offsetX,337 + offsetY);

    this.path_WESTERNUS.closePath();
}

getstate_path_ALASKA(){
  return this.path_ALASKA;
}
getstate_path_NORTHWEST(){
  return this.path_NORTHWEST;
}
getstate_path_ALBERTA(){
  return this.path_ALBERTA;
}
getstate_path_ONTARIO(){
  return this.path_ONTARIO;
}
getstate_path_WESTERNUS(){
  return this.path_WESTERNUS;
}
}
