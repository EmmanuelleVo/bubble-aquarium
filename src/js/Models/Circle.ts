import {settings} from "../settings";

export class Circle {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private position: {x: number, y: number}
    private radius: number
    private color: string
    private speed: {x: number, y: number}
    private origin: { x: number, y: number };
    private opacity: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: { x: number; y: number }, radius: number = settings.circle.radius.max, color: string = settings.circle.color, opacity: number = 0) {
        this.canvas = canvas
        this.ctx = ctx
        this.position = mouse;
        this.radius = radius;
        this.color = color;
        this.origin = {
            x: this.position.x,
            y: this.position.y
        }
        this.opacity = opacity;
    }

    protected draw() {
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath()
        this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.globalAlpha = 1;

    }

    protected update() {
        this.origin.x = this.position.x
        this.origin.y = this.position.y
        this.draw()
    }
}