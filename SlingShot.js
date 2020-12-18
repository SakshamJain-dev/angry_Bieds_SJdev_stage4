class Cbind{

    constructor(body1, point2){

        var options = {
            stiffness : 0.07,
            length    : 20,
            bodyA     : body1,
            pointB    : point2
        }

        //creating constraint
        this.bind = Constraint.create(options); 

        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        World.add(world, this.bind);
    }

    //FUNCTIONS

    display(){

        image(this.sling1, 200, 20 )
        image(this.sling2, 170, 20)
        if(this.bind.bodyA){
            push();
            strokeWeight(5);
            stroke("rgb(54, 28, 13)")
           if(this.bind.bodyA.position.x<220){
                line(this.bind.bodyA.position.x - 20, this.bind.bodyA.position.y, this.bind.pointB.x + 30, this.bind.pointB.y)
                line(this.bind.bodyA.position.x - 20, this.bind.bodyA.position.y, this.bind.pointB.x - 10, this.bind.pointB.y)
                image(this.sling3, this.bind.bodyA.position.x - 20, this.bind.bodyA.position.y - 10, 15, 30)
            }
            else{
                line(this.bind.bodyA.position.x + 20, this.bind.bodyA.position.y, this.bind.pointB.x + 30, this.bind.pointB.y)
                line(this.bind.bodyA.position.x + 20, this.bind.bodyA.position.y, this.bind.pointB.x - 10, this.bind.pointB.y)
                image(this.sling3, this.bind.bodyA.position.x + 20, this.bind.bodyA.position.y - 10 , 15 , 30)
            }
            pop()
        }
    }

    fly(){
        this.bind.bodyA = null;
    }
}
