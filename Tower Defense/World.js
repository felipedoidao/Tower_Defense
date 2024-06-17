class World{
    constructor(){
        this.wave = 1;
        this.num_enemies = 10;
        this.enemies = [];
        this.towers = [];
        this.atirou = false;
        this.cooldown = 0;
        this.matou = 0;
        this.comprou = false;
        this.timer = 0;
    }

    levels(){
        if (this.wave == 1){
            for(var i=0;i<this.num_enemies;i++){
                var enemy = Object.create(enemy1);
                enemy.posY = -35*i;
                this.enemies.push(enemy);
            }
        }

    }
    move(deltaTime){
        this.levels();
        for(var i=0;i<this.num_enemies;i++){
            this.enemies[i].move(deltaTime);
            
            if(this.enemies[i].posY >= canvas.height){
                this.enemies[0].life = 0;
                
            }
            
            if(this.enemies[i].life == 0){
                this.enemies.splice(0,1);
                this.num_enemies -=1;
            }
        }

        for (var i=0; i < entities.length;i++){
            if(this.enemies[0].verificaColisaoTorre(entities[i])){
                entities[i].degrees = entities[i].aimTarget(this.enemies[0].posX, this.enemies[0].posY)*50;
                
                if(this.atirou == false){
                    entities[i].shootTarget(this.enemies[0].posX, this.enemies[0].posY);
                    this.enemies[0].life -= tower1.damage;
                    Player.money +=1;
                    this.atirou = true;

                }
            }
            if (this.atirou){
                this.cooldown += tower1.atkSpeed;
                
                if (this.cooldown >= 15){
                    this.cooldown = 0;
                    this.atirou = false;

                }
            }
        }
        
        for (var i=0; i < shots.length;i++) {
            shots[i].move(deltaTime);
        }
        
    }

    draw(){
        this.buyTower();
        Utils.colorRect(0,0,canvas.width,canvas.height,'DarkGreen');
        Utils.colorRect(canvas.width/2+50, 0, 50, canvas.height/2, "Gray");
        Utils.colorRect(150, canvas.height/2, 350, 50, "Gray");
        Utils.colorRect(150, canvas.height/2, 50, canvas.height, "Gray");
        Utils.colorRect(700, 0, 100, canvas.height, "Purple");

        for(var i=0;i<this.num_enemies;i++){
            this.enemies[i].draw();
        }

        for (var i=0; i < shots.length;i++) {
            shots[i].draw();
        }

    }

    buyTower(){
        if(this.comprou == false && Player.money >= tower1.cost && MouseInput.clickX > 735 && MouseInput.clickX < 765 && MouseInput.clickY > 200 && MouseInput.clickY < 230){
    
            var tower = Object.create(tower1);
            entities.push(tower);
            num_entities +=1;
            Player.money -= tower1.cost;
            this.comprou = true;

        }else if(this.timer >= 50){
            if(this.comprou && Player.money >= tower1.cost){
                this.comprou = false;
            }
            this.timer = 0;
        }

        if(this.comprou){
            this.timer ++;
        }
    }

} 
        

