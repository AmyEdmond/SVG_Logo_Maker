const Shape = require('../lib/shapes');

describe('Shape', () => {
    describe ('isShape',() =>{
        it('Should form a triangle with a blue background', () => {
           const shape = new Triangle();
            shape.setColor("blue"),
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill= "blue" />`);
        });
//     });
// });
    

// describe('Shape', () => {
//     describe ('isShape',() =>{
        it('Should form a circle with a blue background', () => {
            const shape = new Circle();
            shape.setColor("blue"),
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill= "blue" />`);
        });
//     });
// });

// describe('Shape', () => {
//     describe ('isShape',() =>{
        it('Should form a square with a blue background', () => {
            const shape = new square();
            shape.setColor("blue"),
            expect(shape.render()).toEqual(`<rect width="200" height="200" fill= "blue" />`);
        });
    });
});

