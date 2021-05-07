// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generate = {
  renderLicenseBadge: function (license) {

    let badge = ''

    if (license === 'MIT'){
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU'){
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache'){
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'ISC') {
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } else {
      badge = '';
    }
    return badge
  },

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  renderLicenseSection: function (license) { },

  // TODO: Create a function to generate markdown for README
  generateMarkdown: function (data) {
    
    return `
# ${data.projectName}

${this.renderLicenseBadge(data.License)}
## Description

${data.projectDes}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation

${data.projectInst}

## Usage

${data.projectUsage}

## License

This project is using the ${data.License} license.

## Contributing

${data.confirmCon}

## Tests

${data.projectTest}

## Questions

[ ${data.userName} Github Repo](https://github.com/${data.userName}/${data.projectName})

My email: ${data.email}

`;

  }
}


module.exports = generate;