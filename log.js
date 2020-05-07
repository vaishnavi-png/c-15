class Log{
    constructor(x,y,height,angle){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = 20; 
        
        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        stroke("green");
        strokeWeight(5);
        rect(0,0,this.width,this.height);
        pop();
    }

}