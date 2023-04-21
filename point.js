class Point{
    constructor(x,y, speedX, speedY, color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.forceX = (Math.random()*0.2)-0.1;
        this.forceY = (Math.random()*0.2)-0.1;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1);
    }

    changePosition(x,y){
        // const rndX = (Math.random()*4)-2;
        // const rndY = (Math.random()*4)-2;

        // const forceX = (Math.random()*0.2)-0.1;
        // const forceY = (Math.random()*0.2)-0.1;


        if(Math.random() > 0.9){
            this.forceX = (Math.random()*0.2)-0.1;
        }
        if(Math.random() > 0.9){
            this.forceY = (Math.random()*0.2)-0.1;
        }

        this.speedX += this.forceX;
        this.speedY += this.forceY;

        if(this.speedX > 1){
            this.speedX = 1;
        }
        if(this.speedX < -1){
            this.speedX = -1;
        }
        if(this.speedY > 1){
            this.speedY = 1;
        }
        if(this.speedY < -1){
            this.speedY = -1;
        }


        this.x += this.speedX;
        this.y += this.speedY;
    }


    static generateRandom(canvasWidth, canvasHeight){ // funzione factory per generare una posizione randomica. Ho bisogno delle dimensioni della canvas come limiti

        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        const randomColor = `rgba(${0},${g},${b})`; // randomizzo colore

        const randomX = Math.random() * canvasWidth; // randomizzo punto X

        const randomY = Math.random() * canvasHeight; // randomizzo punto Y

        const speedX = (Math.random()*2)-1;
        const speedY = (Math.random()*2)-1;
        
        const newPoint = new Point(randomX,randomY, speedX, speedY, randomColor); // passo nella factory i valori random
        return newPoint; // ritorno il nuovo punto
    }
}