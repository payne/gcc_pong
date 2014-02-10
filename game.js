function Game(canvas) {
  // no need since we are not extending Parent.call(this); // like super
  // Remember this for the keystrokes callback
  var self = this; 
  this.context = canvas.getContext("2d");
  this.width=canvas.width;
  this.height=canvas.height;
  this.context.fillStyle='red'; // white
  this.context.fillRect(100,100,50,50);
  console.log("Done drawing red square");
  this.keyPressed={}; // empty map
  // Why use jQuery $ and not paramter?
  console.log("Catching events!")
  $(canvas).on('keydown keyup', function(e) {
    console.log('e.which='+e.which);
    var keyName=Game.keys[e.which]
    if (keyName) {
      console.log('keyName='+keyName+' e.type='+e.type)
      self.keyPressed[keyName]=e.type==='keydown';
      e.preventDefault();
    }
  });
}

Game.keys={
  32:'space',
  37:'left',
  38:'up',
  39:'right',
  40:'down'
};

Game.prototype.constructor = Game;

Game.prototype.start = function() {
  var self = this; 
  var fps=60; // frame per second
  var interval = 1000 / fps; // ms per frame
  setInterval(function() {
    self.update()
    self.draw()
  },interval);
}//start()

Game.prototype.update = function() {
  this.entities.forEach(function(entity) {
    if (entity.update) entity.update();
  });
}// update

Game.prototype.draw = function() {
  var self=this;
  this.entities.forEach(function(entity) {
    if (entity.draw) entity.draw(self.context);
  });
}// draw

