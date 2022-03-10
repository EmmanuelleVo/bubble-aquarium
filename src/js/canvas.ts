import {settings} from "./settings";
import Bubble from "./Models/Bubble";

export const canvas = {
    init() {
        this.canvas = document.querySelector('.canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')
        this.bubbles = []

        this.resizeCanvas()
        this.generateGradient()

        this.addEventListeners()
        this.draw()

        return this
    },

    resizeCanvas() {
        this.canvas.width = window.innerWidth * settings.canvasWidth
        this.canvas.height = window.innerHeight * settings.canvasHeight
    },

    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < settings.gradient.length; i++) {
            //console.log(i == 0 ? 0 : 1 / i)
            this.gradient.addColorStop(i == 0 ? 0 : 1 / i, settings.gradient[i]);
            // TODO
        }

    },
    draw() {
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas()
            this.draw()
        })

    },
};
