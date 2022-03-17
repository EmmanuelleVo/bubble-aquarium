import {Bubble} from "./Models/Bubble";

export const animation = {
    // @ts-ignore
    init(canvas, bubbles, mousePointer) {
        this.bubbles = bubbles
        this.mousePointer = mousePointer
        this.canvas = canvas
        this.animate()

        return this
    },


    animate() {
        this.canvas.draw()
        this.bubbles.forEach((bubble: Bubble) => {
            bubble.update()
        })
        this.mousePointer.update()

        requestAnimationFrame(() => {
            this.animate()
        });

    }

}