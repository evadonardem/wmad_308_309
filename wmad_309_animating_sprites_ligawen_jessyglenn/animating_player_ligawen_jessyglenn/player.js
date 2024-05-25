class Player {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.currentFrame = 0;
        this.updateCounter = 0;

        this.folderName = 'Player';

        this.actionFrames = {
            'idle': {
                'frameCount': 16 ,
                'frames': [],
                'actionName': 'skeleton-00_idle_',
            },
        };

        for (const key in this.actionFrames) {
            if (Object.hasOwnProperty.call(this.actionFrames, key)) {
                const action = this.actionFrames[key];
                Array.from({ length: action.frameCount }, (_, k) => {
                    const image = new Image();
                    const folder = `${this.folderName}/${key}/`;
                    const filename = `${action.actionName}${(k < 10) ? `0${k}` : k}.png`;
                    const path = `${folder}${filename}`;
                    image.src = path;

                    action.frames[k] = image;
                });
            }
        }
    }

    draw() { 
        if (this.updateCounter % 2 === 0) {            
            this.currentFrame++;
            this.updateCounter = 0;
        }
        this.currentFrame = this.currentFrame < this.actionFrames.idle.frameCount ? this.currentFrame : 0;
        this.updateCounter++;
        this.ctx.drawImage(this.actionFrames.idle.frames[this.currentFrame], 100, 75, this.width, this.height);
    }
}

export default Player;
