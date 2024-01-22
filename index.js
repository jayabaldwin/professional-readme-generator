// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project",
    "Provide instructions of how a user can install your application",
    "How can users navigate and use your application?",
    "Select a license for your application from the following list",
    "Provide guidelines on how contributors can assist in this project, if you'd like it to be open-source",
    "Give users explicit instructions on how to run all necessary tests and supply all necessary commands.",
    "How would you like users to reachout with questions on this application?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Bonus using writeFileSync as a promise
// const init = () => {
//     promptUser()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => writeFile('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };

// Function call to initialize app
init();
