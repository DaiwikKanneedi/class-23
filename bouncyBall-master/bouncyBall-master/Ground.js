class Ground{
    constructor(){
        var Ground_option={isStatic:true}
        this.body=Bodies.rectangle(width/2,height-20,width,20 , Ground_option)
    World.add(world,this.body)
    }
    

display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,width,20)
}
}