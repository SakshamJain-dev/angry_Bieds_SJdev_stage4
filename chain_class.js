class Cbind{

    constructor(body1, body2){

        var options = {
            stiffness : 0.07,
            length    : 20,
            bodyA     : body1,
            bodyB     : body2 
        }

        this.bind = Constraint.create(options);
        World.add(world, this.bind);
    }

    //FUNCTIONS

    display(){
        strokeWeight(4);
        line(this.bind.bodyA.position.x, this.bind.bodyA.position.y, this.bind.bodyB.position.x, this.bind.bodyB.position.y)
    }
    
}


