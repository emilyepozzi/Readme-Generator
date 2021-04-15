// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  }
  return `[![license badge](https://img.shields.io/badge/license-${license}-brightgreen)](${renderLicenseLink(license)})`
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://opensource.org/licenses/gpl-license";
  }
};

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/emilyepozzi/Readme-Generator

## Description
${data.Description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Username](#username)
# [Email](#email)

# Installation
${data.Installation}

# Usage
${data.Usage}

# License
${renderLicenseBadge(data.License)}

## The Main Contributor in this application :
${data.Contributing}

# Command needed to test this app in terminal :
${data.Tests}

# Username Information 
${data.Username}

## Contact Inquiry Questions :
[My personal GitHub Page](https://github.com/emilyepozzi)

  `
}



module.exports = generateMarkdown;
