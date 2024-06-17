class Tower1 extends Tower{
    constructor(posX = 735, posY = 200){
        super(0.2, 1, 160, 6);
        this.posX = posX;
        this.posY = posY;
        this.width = 30;
        this.height = 30;
    }

    draw(){
        this.drawTower(this.posX, this.posY, this.width, this.height, this.degrees, 'blue');
        
        if(this.click == true){
            this.posX = MouseInput.x - 15;
            this.posY = MouseInput.y - 15;
        }

        if(this.click == false && this.posX > 700 && MouseInput.clickX > 735 && MouseInput.clickX < 735+this.width && MouseInput.clickY > 200 && MouseInput.clickY < 200+this.height){
            this.click = true;
            
        }else if (this.click == true && MouseInput.clickX >= this.posX && MouseInput.clickX <= this.posX+this.width && MouseInput.clickY >= this.posY && MouseInput.clickY <= this.posY+this.height){
            this.click =  false;
        }

    }

}