function B() {
        Parent.call(this); // like super
}

B.prototype = Object.create(Parent.prototype)
B.prototype.constructor B
