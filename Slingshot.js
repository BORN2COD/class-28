class Slingshot{
    constructor(b1,p2){ var op = {
        bodyA:b1,pointB:p2,stiffness:0.04,length:4
    }
        this.chain = Matter.Constraint.create(op)
        Matter.World.add(world,this.chain)
}
display(){
    strokeWeight(4)
    if(this.chain.bodyA!=null)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.pointB.x,this.chain.pointB.y);
}
fly(){
    this.chain.bodyA= null
}
}