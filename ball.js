function Ball() {
  Entity.call(this); // like super
  this.width=20;
  this.height=20;
  this.x=game.width/2 - this.width
  this.y=game.height/2 - this.height
  this.xVelocity=0
  this.yVelocity=10
}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor=Ball

// Override!
Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments); // like super
  if ((this.y > game.height - this.height) ||
      (this.y < 0)
     ) {
    this.yVelocity *= -1;
  }
}
