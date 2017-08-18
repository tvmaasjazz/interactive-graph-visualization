var sketchHolder = $('sketch-holder');


function setup() {
	var canvas = createCanvas(900, 500);
  	canvas.parent('sketch-holder');
	
}

function draw() {
	background(200);
  testNode.display();
}

function windowResized() {
	// resizeCanvas(windowWidth / 2, windowHeight / 2);
}

//place in seperate file
var VisualNode = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.edges = [];
};

VisualNode.prototype.update = function() {
  //if this.edges changed from last frame, add edge
};

VisualNode.prototype.display = function() {
  fill(200, 0, 60);
  strokeWeight(0);
  ellipse(this.x, this.y, this.w, this.h);
};

var testNode = new VisualNode(100, 100, 100, 100);
