import Player from "./player.js";

class Game  {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.player = new Player(ctx, 50, 50);


    }

    draw() {
        this.ctx.fillRect(0,0,this.width,this.height);
        this.ctx.fillStyle = "green";

        this.player.draw();

    }
}

export default Game;