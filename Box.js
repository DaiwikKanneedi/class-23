class Box{
    constructor(x, y)
    {
        var box_options={
            restitution: 0.5,
            friction:0.3
        }
        this.body=Bodies.rectangle(x, y, 50, 100, box_options);

       
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,50, 100 );
        pop();
    }
}
