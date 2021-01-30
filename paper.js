class Paper{
    constructor(x, y, radius){
        var options = {
            restitution: 0.5,
            friction: 0.5, 
            density: 1.2
          }

          this.image = loadImage("paper.png");
          this.body = Bodies.circle(x, y, radius, options);
          this.radius=radius;
          World.add(world, this.body);

    }

    display(){
        var paperpos= this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        fill("pink");
        //ellipseMode(RADIUS);
        //circle(0,0, this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}