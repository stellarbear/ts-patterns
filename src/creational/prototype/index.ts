import { Square } from "./Square"

(() => {
    const square = new Square(10, 12);
    const clone = square.clone();

    square.invert();
    console.log(square.toString())
    console.log(clone.toString())
})()