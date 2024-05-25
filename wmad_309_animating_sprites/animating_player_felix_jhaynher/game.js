import Player from "./player.js";
class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.player = new Player(ctx, 100, 75);
    }
    draw(){
        //background environment of the game
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.player.draw();
    }
}
export default Game;