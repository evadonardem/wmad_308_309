class Player{
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    

        this.actionFrames = {
            'run': {
                'frame_count': 21,
                'frames': [],
            },
        };    

        for (const key in this.actionFrames){
            if(Object.hasOwnProperty.call(this.actionFrames,key)){
                const action = this.actionFrames[key];
                Array.from({length: action.frame_count},(_,k)=>{
                    const image = new Image();
                    const folder = `player/${key}/`;
                    const fileName = `r_`
                })
            }
        }   



    }



    draw() {
        const img= new Image();
        img.src = "C:\Users\LAB 310-14\wmad_308_309\wmad_309_animating_sprites\animating_player_medrano_dave\Mustached Box Head Man\PNG Images Sequences\run\r_000.png";

        img.onload = () => {
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(0, 0, this.width, this.height);
            setInterval(function(){
                this.currentFrame = this.currentFrame < this.actionFrames ["r_000.png"].frame_count
                this.ctx.drawImage(this.actionFrames.r_000.frames[0])
            })
        }
        
    }

}

export default Player;