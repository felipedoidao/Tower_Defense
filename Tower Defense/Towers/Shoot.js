class Shoot {

    constructor(x, y, dx, dy, radius, color = 'black',  spd = 1){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.spd = spd;
        this.lifeTime = 0;
        this.maxLifeTime = 20;
    }
    
    move(deltaTime){
        this.x+=(this.dx*this.spd)*deltaTime;
        this.y+=(this.dy*this.spd)*deltaTime;
        this.lifeTime++;
        if(this.lifeTime >= this.maxLifeTime){
            shots.splice(0,1);
        }

    }

    draw(){
        Utils.colorCircle(this.x,this.y, this.radius, this.color);
    }
}