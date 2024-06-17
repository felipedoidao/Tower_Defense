class Enemy1 extends Enemy{
    constructor(posX = 475, posY = 0){
        super(0.10, 1, "Red", 1, 1);
        this.posX = posX;
        this.posY = posY;
    }
}