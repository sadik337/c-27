class SlingShot {
    constructor(bodyA,bodyB) {
      var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:2,
        length:10
      }
      this.sling=Constraint.create(options);
      World.add(world,this.sling);
    }
    
    display(){
      var pointA=this.sling.bodyA.position;
      var pointB=this.sling.bodyB.position;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y)
      
    }
}

