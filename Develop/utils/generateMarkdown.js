const licenses = ["MIT","Apache","Mozilla"];

function licenseBadge(license) {
  if(license === license[0]) {
    return "https://img.shields.io/badge/License-MIT-blue.svg"
  }
  else if(license === license[1]) {
    return "https://img.shields.io/badge/License-Apache-orange.svg"
  }
  else if(license === license[2]) {
    return "https://img.shields.io/badge/License-Mozilla-green.svg"
  }
  else {
    return ""
  }
}

function licenseLink(license) {
  if(license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if(license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if(license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0"
  }
  else {
    return ""
  }
}


const generateMarkdown=(response) => {
  return `

  # ${response.title}

  - ${licenseBadge(response.license)}

  ## Table of Contents

  * [Description](#description)
  * [User Story](#story)
  * [Features](#features)
  * [Usage](#usage)
  * [Instructions](#instructions)
  * [Credits](#credits)
  * [Creator Info](#github)
  * [Deployed Application](#deployed)
  * [License](#license)

  ## Description
  - ${response.desc}

  ## User Story
  - ${response.story}

  ## Features
  - ${response.features}

  ## Usage
  - ${response.usage}

  ## Instructions
  - ${response.instructions}

  ## Credits
  - ${response.credits}

  ## Creator Info
  - ${response.github}
  - ${response.email}

  ## Deployed Application
  - ${response.deployed}

  ## License
  - ${response.license}
  - ${licenseLink(response.license)}
`
}

module.exports=generateMarkdown
