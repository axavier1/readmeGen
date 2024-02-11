// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License Link](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Use](#use)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test Instructions](#test_instructions)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Use
  
  ${data.use}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributors
  
  ${data.contribute}
  
  ## Test Instructions
  
  ${data.tests}
  
  ## Questions
  
  Contact me on GitHub at [${data.githubUsername}](https://www.github.com/${data.githubUsername})
  
  Email me at [${data.email}](mailto:${data.email})
  
`;
}

module.exports = generateMarkdown;
