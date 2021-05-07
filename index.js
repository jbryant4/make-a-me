// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
const generate = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github user name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter user name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDes',
        message: 'Please give the project description.',
    },
    {
        type: 'input',
        name: 'projectInst',
        message: 'Please enter installation instructions.',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please enter project Usage.',
    },
    {
        type: 'input',
        name: 'projectCont',
        message: 'Please give the project Contribution rules.',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'Please give the project Test',
    },
    {
        type: 'list',
        name: 'Licence',
        message: 'Would you like to add a Licence? (Check all that apply)',
        choices: ['MIT', 'GNU', 'Apache', 'ISC','No Licence Used']
    },
];


// TODO: Create a function to write README file
function writeToFile(data) { }

// TODO: Create a function to initialize app
function init() {
    console.log(`
    =================
    Project Questions
    =================
    `);

    inquirer
        .prompt(
            questions
        )
        .then(answers => {
            //! need to add if statement for licence 
            generate.generateMarkdown(answers)
            // Use user feedback for... whatever!!
        });

}

// Function call to initialize app
init();