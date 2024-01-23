// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

// badge for that license is added near the top of the README

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install this application:
  ${data.installation}

 
  ## Usage
  To use this application:
  ${data.usage}


  ## License
//   notice is added that explains which license the application is covered under
  ${data.license}


  ## Contributing
  Product contribution guidelines are as follows:
  ${data.contribution}


  ## Tests
  ${data.instructions}


  ## Questions
  - My GitHub Username is: [@${data.github}](https://github.com/${data.github})
  - My email: ${data.email}

  To reach out to me with additional questions: ${data.questions};
`;
}

module.exports = generateMarkdown;