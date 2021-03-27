
class Star{
    constructor(x,y,w,h){
    var options={
      isStatic:true
    }
  this.x=x
  this.y=y
  this.w=w
  this.h=h
  this.starBody=Bodies.rectangle(400,390,20,20,options);
  World.add(world,this.starBody)
  this.image=loadImage("star.png")
  }
  
display() {
  
  imageMode(CENTER)
  fill ("gold")
  image(this.image,this.starBody.position.x,this.starBody.position.y,20,20);
}
  }