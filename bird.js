class Bird{
    constructor(x,y){
        var options = {
            'restitution': 0.5,
            'friction': 1.0,
            'density': 1.5
        }

        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x,y,width,height,options);

        World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       rotate(angle);
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("orange");
       rect(0,0,this.width,this.height);
       pop();
    }
}