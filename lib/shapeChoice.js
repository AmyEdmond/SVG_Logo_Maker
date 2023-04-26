const {Circle, Triangle, Square} = require('./shapes.js');

function shapeChoice(data) {
    if (data.logoShape === "circle") {
    let userChoice = new Circle (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }

    if (data.logoShape === "triangle") {
    let userChoice = new Triangle (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }

    if (data.logoShape === "square") {
    let userChoice = new Square (data.backgroundColor, data.logoText, data.textColor)
    return userChoice.render()
    }
};

module.exports = shapeChoice;
