class Player {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.currentFrame = 0;

        this actionFrames = {
            'idle_a': {
                'id': '01',
                'frameCount': 21,
                'frames': [],
            },
        };

        for (const key in this.actionFrames) {
            if(Object.hasOwnProperty.call(this.actionFrames,key)) {
                const action = this.actionFrames[key];
                Array.from({length: action.frameCount}, (_, k) => {
                    const image = new Image();
                    const folder = 'player/${action.id}_${key}/';
                    const fileName = 'skeleton-${action.id}_${key}_${(k < 10) ? '0${k}' : k}.png';          
                    const path = '${foldder}${fileName}';
                    image.src = path;
                    action.frames[k] = image;
                })
            }
        }
    }
}