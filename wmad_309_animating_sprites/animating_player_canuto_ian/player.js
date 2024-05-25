class Player {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.currentFrame = 0;
        this.updateCounter = 0;

        this.folderName = 'player';

        this.actionFrames = {
            'standing': {
                'frameCount': 2,
                'frames': [],
                'actionName': 'stand',
            },
            'run': {
                'frameCount': 4,
                'frames': [],
                'actionName': 'run',
            }
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
        if (this.updateCounter % 4 === 0) {            
            this.currentFrame++;
            this.updateCounter = 0;
        }
        this.currentFrame = this.currentFrame < this.actionFrames.standing.frameCount ? this.currentFrame : 0;
        this.updateCounter++;
        this.ctx.drawImage(this.actionFrames.standing.frames[this.currentFrame], 125, 100, this.width, this.height);
    }
}

export default Player;