class Dustbin{
    constructor(x,y){
        var options ={isStatic:true};
        this.body1=Bodies.rectangle(x,y,200,20,options);
	 World.add(world,this.body1);

	 this.body2=Bodies.rectangle(x-100,y-25,20,200,options);
	 World.add(world,this.body2);

	 this.body3=Bodies.rectangle(x+100,y-25,20,200,options);
     World.add(world,this.body3)
     
     this.image=loadImage("dustbingreen.png");

    }
    display(){
        var pos1=this.body1.position;
        var pos2=this.body2.position;
        var pos3=this.body3.position;
       imageMode(CENTER);
        image(this.image,pos1.x,pos1.y-100,200,200);
        
    }
}