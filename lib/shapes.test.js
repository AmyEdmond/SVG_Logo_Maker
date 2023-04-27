const { Circle, Triangle, Square } = require("../lib/shapes");

describe("triangle", () => {
  it("Should form a triangle with a user background color, logo text and text color", () => {
    const triangle = new Triangle("green", "SVG", "white");
    expect(triangle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="115, 40 200, 180 50, 180" fill="green" /><text x="120" y="140" font-size="40" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});

describe("circle", () => {
  it("Should form a circle with a user background color, logo text and text color", () => {
    const circle = new Circle("green", "SVG", "white");
    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});

describe("square", () => {
  it("Should form a square with a user background color, logo text and text color", () => {
    const square = new Square("green", "SVG", "white");
    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" width="125" height="125" fill="green" /><text x="120" y="80" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});
