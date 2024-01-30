"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('render a circle');
    }
}
let circle = new Circle(2, 'red');
circle.render();
console.log(circle);
