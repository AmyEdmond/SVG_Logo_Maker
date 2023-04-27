class Shape {
  constructor(backgroundColor, logoText, textColor) {
    this.backgroundColor = backgroundColor;
    this.logoText = logoText;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(backgroundColor, logoText, textColor) {
    super(backgroundColor, logoText, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="115, 40 200, 180 50, 180" fill="${this.backgroundColor}" /><text x="120" y="140" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

class Circle extends Shape {
  constructor(backgroundColor, logoText, textColor) {
    super(backgroundColor, logoText, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(backgroundColor, logoText, textColor) {
    super(backgroundColor, logoText, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" width="125" height="125" fill="${this.backgroundColor}" /><text x="120" y="80" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
