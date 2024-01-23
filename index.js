// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatedmarkdown.js')

// TODO: Create an array of questions for user input
// const questions = [
//     "What is the title of your project?",
//     "Provide a short description",
//     "Provide instructions of how a user can install your application",
//     "How can users navigate and use your application?",
//     "Select a license for your application from the following list",
//     "Provide guidelines on how contributors can assist in this project, if you'd like it to be open-source",
//     "Give users explicit instructions on how to run all necessary tests and supply all necessary commands.",
//     "What is your gitHub username?",
//     "What is your email address",
//     "How would you like users to reachout with questions regarding this application?"
// ];

const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is the title of your project?",
    "Please write a short description of your project.",
    "Select a license for your application from the following list",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "How can users navigate your repository and use your application?",
    "What does the user need to know about contributing to the repo?",
    "How would you like users to reachout with questions regarding this application?"
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'title',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[3],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[4],
      choices: ['MIT License', 'Another License'],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[8],
    },
    {
      type: 'input',
      name: 'questions',
      message: questions[9],
    },
  ])
  .then((data) => {
    let readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    console.log(data);
  });
}

// TODO: Create a function to initialize app
// function init() {
//     writeToFile;
// }

// Bonus using writeFileSync as a promise
// const init = () => {
//     promptUser()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => writeFile('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to README.md'))
//       .catch((err) => console.error(err));
//   };

// Function call to initialize app
// init();
