function Paddle() {
  Entity.call(this); // like super
  this.width=20;
  this.height=100;
  this.y = game.height / 2 - this.height / 2;
  this.x = 20;
  this.speed=15
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor=Paddle

Paddle.prototype.update = function() {
  if (game.keyPressed.up) {
    this.yVelocity=-1*this.speed;
  console.log('Paddle.update! yVelocity='+this.yVelocity)
  } else if (game.keyPressed.down) {
    this.yVelocity=this.speed;
  console.log('Paddle.update! yVelocity='+this.yVelocity)
  } else {
    this.yVelocity=0;
  }
  // make paddle within screen limits
  this.y = Math.min(Math.max(this.y,0),
       game.height - this.height)
  Entity.prototype.update.apply(this, arguments);
}


