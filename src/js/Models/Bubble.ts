import {settings} from "../settings";
import {random} from "../helpers";

export default class Bubble {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private position: {x: number, y: number}
    private radius: number
    private opacity: number
    private color: string
    private speed: {x: number, y: number}

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
        this.generate()
    }

    generate() {
        this.radius = random(settings.bubble.radius.min, settings.bubble.radius.max)
        this.position = {
            x: random(this.radius, this.canvas.width),
            y: this.canvas.height + this.radius
        }
        this.color = settings.bubble.colors[random(0, settings.bubble.colors.length)]
        //console.log(settings.bubble.colors[random(0, settings.bubble.colors.length, false)]) // not working
        this.opacity = random(0, 1)
        this.speed =  {
            x: random(settings.bubble.speed.x.min, settings.bubble.speed.x.max),
            y: random(settings.bubble.speed.y.min, settings.bubble.speed.y.max)
        }
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.globalAlpha = this.opacity
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.globalAlpha = 1
    }

    update() {
        this.draw()
        if(this.position.y < -this.radius) {
            this.generate()
        }

        this.position.y -= this.speed.y
        this.position.x += this.speed.x
        //console.log(this.position)
    }
}
