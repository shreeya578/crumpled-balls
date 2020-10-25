class Paper{
    constructor(x,y,radius){
     var options ={restitution:0.3,density:1.2}   
     this.body=Bodies.circle(x,y,radius,options);
     World.add(world,this.body);
     this.r=radius*2;
     this.image=loadImage("paper.png");
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}