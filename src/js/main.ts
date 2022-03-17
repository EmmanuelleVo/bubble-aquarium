import {settings} from "./settings";
import {Bubble} from "./Models/Bubble";
import {canvas} from "./canvas";
import {animation} from "./animation";
import {Circle} from "./Models/Circle";

const app = {

    init() {
        this.canvasElt = document.querySelector('.canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.mouse = {x: 0, y: 0}
        this.bubbles = []
        this.circles = []
        this.mousePointer = Circle

        this.mousePointer = new Circle(this.canvas, this.ctx, this.mouse, settings.circle.radius.max, settings.circle.color, 1);
        this.canvas = canvas.init(this.mouse)
        this.animation = animation.init(this.canvas, this.bubbles, this.mousePointer)

        //this.loadCircle()
        this.loadBubbles()

    },

    loadBubbles() {
        for (let i = 0; i < settings.bubble.maxCount; i++) {
            this.bubbles.push(new Bubble(this.canvasElt, this.ctx, this.mouse))
        }
    },

    loadCircle() {
        this.circles.push(new Circle(this.canvasElt, this.ctx, this.mouse, settings.circle.radius.max, settings.circle.color, 1))
    }



};
app.init()


