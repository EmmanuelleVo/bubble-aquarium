import {settings} from "../settings";
import {random} from "../helpers";
import {Circle} from "./Circle";

// @ts-ignore
export class Bubble extends Circle {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private position: {x: number, y: number}
    private radius: number
    private opacity: number
    private color: string
    private mouse: {x: number, y:number}
    private speed: {x: number, y: number}

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: {x: number, y:number}) {
        super(canvas, ctx, mouse);
        this.canvas = canvas
        this.ctx = ctx
        this.mouse = mouse
        this.generate()
    }

    protected generate() {
        this.radius = random(settings.bubble.radius.min, settings.bubble.radius.max)
        this.position = {
            x: random(this.radius, this.canvas.width - this.radius),
            y: random(this.canvas.height * 1.5, this.canvas.height + this.radius * 2)
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
        this.ctx.globalAlpha = this.opacity
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.globalAlpha = 1
    }

    update() {
        if(this.position.y < -this.radius) {
            this.generate()
        }

        //pointeur : distance = Math.sqrt(dx * dx + dy * dy) et dx = circle1.x - circle2.x
        let hypotenuse: number;
        hypotenuse = Math.sqrt(Math.pow((this.position.x - this.mouse.x), 2) + Math.pow((this.position.y - this.mouse.y), 2));
        // distance entre centre des 2 cercles est inférieure à la somme des rayons de ces deux cercles
        if (hypotenuse <= this.radius + settings.circle.radius.max) {
            this.opacity = 0;
        }

        this.position.y -= this.speed.y
        this.position.x += this.speed.x

        return this.draw()
    }
}
