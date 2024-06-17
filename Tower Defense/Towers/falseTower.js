class False extends Tower {
    constructor(posX, posY){
        super(0, 0, 0, 0)
        this.posX = posX;
        this.posY = posY;
        this.click = false;
    }

    draw(){
        if(this.click == false && this.posX > 700 && MouseInput.clickX > 735 && MouseInput.clickX < 735+this.width && MouseInput.clickY > 200 && MouseInput.clickY < 200+this.height){
            this.click = true;
            

        }else if (this.click == true && MouseInput.clickX >= this.posX && MouseInput.clickX <= this.posX+this.width && MouseInput.clickY >= this.posY && MouseInput.clickY <= this.posY+this.height){
            this.click =  false;
        }
    }
}