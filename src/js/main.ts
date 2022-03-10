import {settings} from "./settings";
import Bubble from "./Models/Bubble";
import {canvas} from "./canvas";
import {animation} from "./animation";

const app = {

    init() {
        this.canvasElt = document.querySelector('.canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.bubbles = []

        this.canvas = canvas.init()
        this.animation = animation.init(this.canvas, this.bubbles)

        this.loadBubbles()

    },

    loadBubbles() {
        for (let i = 0; i < settings.bubble.maxCount; i++) {
            this.bubbles.push(new Bubble(this.canvasElt, this.ctx))
        }
    }



};
app.init()


