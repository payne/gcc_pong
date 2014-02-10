function Background() {

}
Background.prototype.draw=function(context) {
  context.fillStyle='#000'; // black
  context.fillRect(0,0,game.width, game.height);
  //console.log("Background.draw");
}

Background.prototype.constructor=Background

var game = new Game($('canvas')[0])
game.entities=[
new Background(),
new Ball(),
new Paddle()
];
game.start();
$('canvas')[0].focus()
