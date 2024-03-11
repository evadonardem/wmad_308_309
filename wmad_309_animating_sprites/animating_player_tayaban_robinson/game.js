import Player from "./player.js";

class Game {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    //player
        this.player = new Player(ctx, 50, 50);
    }
    draw() {
        /* this.ctx.rect(0,0,100,100); */
        this.ctx.fillstyle = "red";
        this.ctx.fillrect(0, 0,this.width, this.height);
                /* this.ctx.stroke */
         this.Player.draw();
    }
}
/* const x = (value) =>{
    return value * 2;
}; */
export default Game;
