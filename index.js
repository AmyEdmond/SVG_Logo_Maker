const fs = require('fs');
const inquirer = require('inquirer');
const shapeChoice = require('./lib/shapeChoice.js')
const fileName = "./examples/logo.svg";

function makeLogo(data) {
    const svg = shapeChoice(data);
    fs.writeFile(fileName, svg, error => error 
    ? console.error('Error!')
    : console.log('Generated logo.svg!'))
};

const questions = [
    
    {
        type: 'input',
        message: 'What is your logo text? Please enter up to three characters!',
        name: 'logoText',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log('Your text must be up to three characters! Please try again');
            }
            return true;
        }
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
          makeLogo(data);
    });
}   
//.catch((error) => console.log(error));

init();