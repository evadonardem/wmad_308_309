class Player {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.currentFrame = 0;

        //prep sprites
        this.actionFrames = {
            '00_idle': { //key 
                'frameCount': 11,
                'frames': [],
            },
            '03_explode': {
                'frameCount': 13,
                'frames': [],
            }
        };
     
    for (const key in this.actionFrames){
        if(Object.hasOwnProperty.call(this.actionFrames,key)) {
            const action = this.actionFrames[key];
            Array.from({length: action.frameCount},(_, k) => {
                const image = new Image();
                const folder = `player/${key}/`; 
                const fileName = `skeleton-${key}_${(k < 10) ? `0${k}` : k}.png`;
                const path = `${folder}${fileName}`;
                image.src = path;
                action.frames[k] = image;
            });
        }
    }
}

    draw(){
        this.currentFrame = this.currentFrame < this.actionFrames["00_idle"].frameCount
            ? this.currentFrame : 0;
        this.ctx.drawImage(this.actionFrames["00_idle"].frames[this.currentFrame++], 100, 75, this.width, this.height);
    }
}
export default Player;