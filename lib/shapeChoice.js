const {Circle, Triangle, Square} = require('./shapes.js');

function shapeChoice(data) {
    if (data.logoShape === "Circle") {
    let userChoice = new Circle (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }

    if (data.logoShape === "Triangle") {
    let userChoice = new Triangle (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }

    if (data.logoShape === "Square") {
    let userChoice = new Square (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }
};

module.exports = shapeChoice;
