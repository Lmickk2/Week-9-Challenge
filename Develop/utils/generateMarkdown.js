// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateMarkdown=(response) => {
  return `

  # ${response.title}

  # Description
  - ${response.desc}

  # User Story
  - ${response.story}

  # Features
  - ${response.features}

  # Usage
  - ${response.usage}

  # Credits
  - ${response.credits}

  # Deployed Application
  - ${response.deployed}

  # License
  - ${response.license}

`
}

// return 
// function renderLicenseBadge(license) {

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(!license) {
//     return `https://img.shields.io/badge/license-${license}-blue`
//   }
//   else {
//     return ' '
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(!license) {
//     return `https://choosealicense.com/licenses/${license}`
//   }
//   else {
//     return ' '
//   }
// }

// TODO: Create a function to generate markdown for README
module.exports=generateMarkdown
