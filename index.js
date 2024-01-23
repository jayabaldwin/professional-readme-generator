// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatedmarkdown.js')

// Inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Select a license for your application from the following list",
        choices: ['MIT License', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'No License Required'],
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be run to install dependencies?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be run to run tests?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about navigating this repository?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: 'input',
        name: 'questions',
        message: "How would you like users to reachout with questions regarding this application?",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created README.md!')
    });
}

// TODO: Create a function to initialize app
function init() {
    // prompt inquirer questions
    inquirer.prompt(questions)
        .then((answers) => {
            // pass inquirer answers into generate markdown 
            let markdownContent = generateMarkdown(answers);
            // pass both answers and markdown content to writeToFile
            writeToFile('README.md', markdownContent);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();