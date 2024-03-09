import Player from ".player.js" ;
class Game {
    constructor(ctx, width,height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.Player = new Player(ctx, 100, 75);
    }

    draw() {
        this.ctx.fillstyle = "red";
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.player.draw();
    }
}

export default Game;
