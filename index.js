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
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'checkbox',
        name: 'projectUsage',
        message: 'What was used in this project pick all that apply:',
        choices: ['HTML','CSS','JavaScript','jQuery','Node.js']
    },
    {
        type: 'confirm',
        name: 'confirmCon',
        message: 'Would you like to use an industry standard Contributor Covenant?',
        default: true
    },
    {
        type: 'input',
        name: 'projectCon',
        message: 'Type your guidelines to Contributing to your Application:',
        when: ({ confirmCon }) => {
            if (! confirmCon) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'Please give the instruction on how to test your Application:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Would you like to add a Licence? (Check all that apply)',
        choices: ['MIT', 'GNU', 'Apache', 'ISC','No']
    },
];


// TODO: Create a function to write README file
function writeToFile(data) { 
    fs.writeFile('./gREADME.md',data, err => {
            if (err) throw err;
        
            console.log('Generated ReadMe complete! Check out gREADME to see the output!')
        });
}

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
            // use if statment to set up contributing section 
            if (answers.confirmCon === true) {
                answers.confirmCon = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)'
            } else {
                answers.confirmCon = answers.projectCon;
            };
            

            const data = generate.generateMarkdown(answers)
            // Use user feedback for... whatever!!
            
            writeToFile(data);
        });

}

// Function call to initialize app
init();