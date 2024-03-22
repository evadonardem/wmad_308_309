import Player from "./player.js";

class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.player = new Player(ctx, 200, 160);
    }

    draw() {
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.player.draw();
    }
}

export default Game;