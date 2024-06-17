 class Enemy {
	constructor(speed, life, color, damage, bounty, radius = 15) {
		this.speed = speed;
		this.life = life;
		this.color = color;
		this.damage = damage;
		this.bounty = bounty;
        this.radius = radius;
	}

	draw(){
        Utils.colorCircle(this.posX, this.posY, this.radius, this.color);
    }

	move(deltaTime){

        if(this.posY <= 320){
            this.posY += this.speed*deltaTime;
        }else if(this.posX >= 175){
            this.posX -= this.speed*deltaTime;
        }else if(this.posY > 0){
            this.posY += this.speed*deltaTime;
        }

        if(this.posY >= canvas.height){
            Player.life -= 1;
        }
    }

    verificaColisaoTorre(outroCirculo) {
        const distancia = Math.sqrt((this.posX - outroCirculo.posX) ** 2 + (this.posY - outroCirculo.posY) ** 2);

        return distancia < this.radius + outroCirculo.rangeRadius;
    }

    verificaColisaoBala(outroCirculo){
        const distancia = Math.sqrt((this.posX - outroCirculo.x) ** 2 + (this.posY - outroCirculo.y) ** 2);

        return distancia < this.radius + outroCirculo.radius;
    }
}