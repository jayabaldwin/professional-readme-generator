const licenseType = [
  {
    type: 'MIT',
    badge: '(https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: '(https://opensource.org/licenses/MIT)',
  },
  {
    type: 'APACHE 2.0',
    badge: '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    link: '(https://opensource.org/licenses/Apache-2.0)',
  },
  {
    type: 'Boost Software License 1.0',
    badge: '(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    link: '(https://www.boost.org/LICENSE_1_0.txt)',
  },
  {
    type: 'BSD 3',
    badge: '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    link: '(https://opensource.org/licenses/BSD-3-Clause)',
  },
  {
    type: 'None',
    badge: '',
    link: '',
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (badge) {
    case 'MIT':
      return licenseType[0].badge
      break;
    case 'APACHE 2.0':
      return licenseType[1].badge
      break;
    case 'GPL 3.0':
      return licenseType[2].badge
      break;
    case 'BSD 3':
      return licenseType[3].badge
      break;

    default:
      return ''
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch (link) {
    case 'MIT':
      return licenseType[0].link
      break;
    case 'APACHE 2.0':
      return licenseType[1].link
      break;
    case 'GPL 3.0':
      return licenseType[2].link
      break;
    case 'BSD 3':
      return licenseType[3].link
      break;

    default:
      return ''
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

// badge for that license is added near the top of the README
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

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
  ### Command to install dependencies:
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
  ### Command to run tests:
  ${data.tests}


  ## Questions
  To reach out to me with additional questions: ${data.questions};
  - My GitHub Username is: [@${data.github}](https://github.com/${data.github})
  - My email: ${data.email}
`;
}

module.exports = generateMarkdown;