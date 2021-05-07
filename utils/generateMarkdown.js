// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generate = {
  renderLicenseBadge: function (license) { },

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  renderLicenseLink: function (license) { },

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  renderLicenseSection: function (license) { },

  // TODO: Create a function to generate markdown for README
  generateMarkdown: function (data) {
    console.log('recieved')
    return `# ${data.title}
`;
    
  }
}


module.exports = generate;