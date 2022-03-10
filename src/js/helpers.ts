import {settings} from "./settings";

export function random(min: number, max: number, ceil: boolean = true) {
    if(ceil) {
        return Math.ceil(Math.random() * (max - min) + min)
    }

    return Math.random() * (max - min) + min

}