import {settings} from "./settings";

export const canvas = {
    init(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: {x: number, y: number}) {
        this.canvas = document.querySelector('.canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')
        this.mouse = mouse
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

        return this
    },

    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < settings.gradient.length; i++) {
            //console.log(i == 0 ? 0 : 1 / i)
            this.gradient.addColorStop(i == 0 ? 0 : 1 / i, settings.gradient[i]);
            // TODO
        }

        return this

    },
    draw() {
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        return this
    },

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas()
            this.draw()
        })

        this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            this.mouse.x = Math.max(e.x - this.canvas.getBoundingClientRect().x - parseInt(getComputedStyle(this.canvas).borderWidth), 0)
            this.mouse.y = Math.max(e.y - this.canvas.getBoundingClientRect().y - parseInt(getComputedStyle(this.canvas).borderWidth), 0)
        });
        return this;
    },
};
