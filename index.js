const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js')
const fileName = "./examples/logo.svg";

function writeToFile(data) {
    const svg = shapes(data);
    fs.writeFile('fileName', svg, error => error 
    ? console.error('Error!')
    : console.log('Generated logo.svg!'))
};

const questions = [
    
    {
        type: 'input',
        message: 'What is your logo text? Please enter up to three characters!',
        name: 'logoText',
    },
    {
        type: 'input',
        message: 'What is your logo s text color? Please enter a color keyword or a hexadecimal number',
        name: 'textColor',
    }, 
    {
        type: 'list',
        message: 'Which shape would you like for your logo?',
        choices: ['circle', 'triangle', 'square'],
        name: 'logoShape',
    }, 
    {
        type: 'input',
        message: 'What is your background color? Please enter a color keyword or a hexadecimal number',
        name: 'backgroundColor',
    },

];


function init() {
    inquirer.prompt(questions)
    .then((data) => {
        if (data.logoText.length > 3) {
            console.log('Please enter up to three characters!');
            init();
        } else {
         writeToFile('logo.svg', data);
        };
    });
}   

init();