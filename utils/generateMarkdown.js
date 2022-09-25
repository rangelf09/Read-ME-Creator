// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   return `![badge](https://img.shields.io/badge/License-${data.license}-yellow.svg)`
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return `(https://opensource.org/licenses/MIT)`
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
${data.description}
<br>

## Table of Contents
* [Installation Instructions](#install)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution)
* [Test Instructions](#test)
* [Email](#email)
* [Github](#github)
* [License](#license)
<br>

### Installation Instructions
${data.installInstructions}
<br>

### Usage Information
${data.usageInformation}
<br>

### Contribution Guidelines
${data.contributionGuidelines}
<br>

### Test Instructions
${data.testInstruction}
<br>

### Github
${data.github}
<br>

### Email
${data.email}
<br>

### License
${data.license}
<br>
`;
}

module.exports = {generateMarkdown};
