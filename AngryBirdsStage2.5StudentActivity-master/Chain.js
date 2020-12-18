class Chain{
    constructor(bodyA, bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.08,
            length:30
        }
    
        this.chain = Matter.Constraint.create(options); 
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position; 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }  
}  