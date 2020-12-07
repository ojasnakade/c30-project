class Block  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
  this.Visibility=255;
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  
  if(this.body.speed<3){
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
  }
  else{
   World.remove(world,this.body);
   
   this.Visibility=this.Visibility-5;
   tint(255,this.Visibility);
   rect(0, 0, this.width, this.height);
   
   }
   pop();
 }
    
}


