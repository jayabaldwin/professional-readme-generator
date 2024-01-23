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
    type: 'Boost Software 1.0',
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

// Returns a license badge 
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return licenseType[0].badge;
    case 'APACHE 2.0':
      return licenseType[1].badge;
    case 'GPL 3.0':
      return licenseType[2].badge;
    case 'BSD 3':
      return licenseType[3].badge;
    default:
      return '';
  }
}

// Returns a license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return licenseType[0].link;
    case 'APACHE 2.0':
      return licenseType[1].link;
    case 'GPL 3.0':
      return licenseType[2].link;
    case 'BSD 3':
      return licenseType[3].link;
    default:
      return '';
  }
}

// Returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `The application is covered under the following license: `;
  } else {
    return `The application is not covered under a license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  <h1 align="center">${data.title}</h1>

  [![License]${licenseBadge}]

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
  \`
  ${data.installation}
  \`

  ## Usage
  To use this application:
  ${data.usage}

  ## License
  ${licenseSection} ![${data.license}]${licenseLink}

  ## Contributing
  ${data.contribution}

  ## Tests
  ### Command to run tests:
  \`
  ${data.tests}
  \`

  ## Questions
  Find me on GitHub: [@${data.github}](https://github.com/${data.github})
  Email me here: ${data.email}
`;
}

module.exports = generateMarkdown;