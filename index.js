// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:   'input',
        name: 'title',
        message: 'What is the name of your title?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'GIve a brief descripton of your application:'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'What are the instructions for the install?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license you are using?',
        choices: ['MIT','GNU','Mozilla']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) => err ?console.log(err): console.log('README was created')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then((input) =>{
        writeToFile('README.md', markdown.generateMarkdown(input));
    })
}

// Function call to initialize app
init();
