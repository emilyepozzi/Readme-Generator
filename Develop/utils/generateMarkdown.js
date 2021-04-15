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

# ${data.Description}
  
# ${renderLicenseBadge(data.License)}

  `
}



module.exports = generateMarkdown;
