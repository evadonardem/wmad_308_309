import Player from "./player.js";
class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.player = new this.player(ctx, 100, 75);
    }
    draw() {
        this.ctx.fillColor = "red";
        this.ctx.rect(0, 0, this.width, this.height);

        this.player.draw();
    }
}
export default Game;