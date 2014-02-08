function Game(canvas) {
  // no need since we are not extending Parent.call(this); // like super
  var self = this; // Remember 
  this.context = canvas.getContext("2d");
  this.context.fillStyle='red'; // white
  this.context.fillRect(100,100,50,50);
  console.log("Done drawing red square");
}

// since we are not extending
//Game.prototype = Object.create(Parent.prototype)
Game.prototype.constructor = Game;
var game = new Game($('canvas')[0]);
$('canvas')[0].focus();

