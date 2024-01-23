// Packages needed for this application
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
        choices: ['MIT', 'APACHE 2.0', 'Boost Software 1.0', 'BSD 3', 'None'],
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
        message: "What does the user need to know about this repository?",
    },
    {
        type: 'list',
        name: 'contributionQuestion',
        message: "Will you be accepting contributions to the repo?",
        choices: ['I will', 'I will not']
    },
    {
        type: 'input',
        name: 'contribution',
        message: "If you answered 'I will' to the previous question. Please specify any guidelines you have with contribution, if not, leave blank",
    },
    {
        type: 'list',
        name: 'questions',
        message: "Where would you like users to reachout with questions regarding this application?",
        choices: ['GitHub', 'Email']
    }
];


// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created README.md!')
    });
}

// Initialize app
function init() {
    // prompt inquirer questions
    inquirer.prompt(questions)
        .then((answers) => {
            // pass inquirer answers into generate markdown 
            let markdownContent = generateMarkdown(answers);
            // pass markdown content to writeToFile
            writeToFile('README.md', markdownContent);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();