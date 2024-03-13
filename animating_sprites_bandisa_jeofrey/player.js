class Player {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.currentFrame = 3;
        this.updateCounter = 0;

        this.folderName = 'player/idle';

        this.actionFrames = {
            'idle': {
                'frameCount': 3,
                'frames': [],
                'actionName': 'sword_air_attack_1', // Make sure this matches the folder name
            },
        };

        this.loadFrames().then(() => {
            // Start animation loop after frames are loaded
            this.startAnimationLoop();
        });
    }

    async loadFrames() {
        for (const key in this.actionFrames) {
            if (Object.hasOwnProperty.call(this.actionFrames, key)) {
                const action = this.actionFrames[key];
                action.frames = [];
    
                for (let k = 0; k < action.frameCount; k++) {
                    const image = new Image();
                    const folder = `${this.folderName}/`;
                    const filename = `${action.actionName}_${k}.png`;
                    const path = `${folder}${filename}`;
                    await new Promise((resolve, reject) => {
                        image.onload = resolve;
                        image.onerror = reject;
                        image.src = path;
                    });
                    action.frames.push(image);
                }
            }
        }
    }
    
    startAnimationLoop() {
        setInterval(() => {
            this.draw();
        }, 1000 / 10); // Adjust the frame rate as needed
    }

    draw() {
        if (this.updateCounter % 2 === 0) {
            this.currentFrame++;
            this.updateCounter = 0;
        }
        this.currentFrame = this.currentFrame < this.actionFrames.idle.frameCount ? this.currentFrame : 0;
        this.updateCounter++;
        this.ctx.drawImage(this.actionFrames.idle.frames[this.currentFrame], 100, 50, this.width, this.height);
    }
}

export default Player;
