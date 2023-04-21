class Player{
    constructor(x,y, colour){
        this.x = x;
        this.y = y;
        this.colour = colour;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2, 2);
    }
    changePosition(x,y){
        const posX = 50;
        const posY = 200;
        this.x += posX;
        this.y += posY;
    }
}