import Bubble from "./Models/Bubble";

export const animation = {
    // @ts-ignore
    init(canvas, bubbles) {
        this.bubbles = bubbles
        this.canvas = canvas
        this.animate()

        return this
    },


    animate() {
        this.canvas.draw()
        this.bubbles.forEach((bubble: Bubble) => {
            bubble.update()
        })
        requestAnimationFrame(() => {
            this.animate()
        });
    }

}