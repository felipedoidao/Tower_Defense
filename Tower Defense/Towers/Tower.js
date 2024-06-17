class Tower{
	constructor (atkSpeed, damage, rangeRadius, cost) {
		this.atkSpeed = atkSpeed;
		this.damage = damage;
		this.rangeRadius = rangeRadius;
		this.cost = cost;
		this.level = 1;
		this.degrees = 0;
		this.click = false;
		this.mx;
		this.my;
		this.shot;
	}
	
	move(deltaTime){

	}

	drawTower(x, y, width, height, degrees, color){
		this.degrees = degrees;
		Utils.rotate(x, y, width, height, degrees, color);
	}

	aimTarget(targetX, targetY){
		var difX = this.posX - targetX;
		var difY = this.posY - targetY;

		var angulo = Math.atan2(difY, difX);

		return angulo;
	}

	shootTarget(targetX, targetY){
		var difX = targetX - this.posX;
		var difY = targetY - this.posY;

		var angulo = Math.atan2(difY, difX);

        this.mx = Math.cos(angulo);
        this.my = Math.sin(angulo);

		this.shot = new Shoot(this.posX+(this.width/2), this.posY+(this.height/2), this.mx, this.my, 10);
		shots.push(this.shot);
		console.log(shots);
	}
};


 