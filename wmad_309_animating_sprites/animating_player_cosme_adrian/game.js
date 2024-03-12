import Player from "./player.js";

class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.player = new Player(ctx, 100, 60);
    }

    draw() {
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.player.draw();
    }
}

export default Game;