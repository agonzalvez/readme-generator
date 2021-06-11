const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Project Title",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your app. What was your motivation? Does it solve any specific problems?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the purpose of this app/project?",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide steps for installation?",
        },
        {
            type: "input",
            name: "contributors",
            message: "Who were the contributors?",
        },
        {
            type: "input",
            name: "features",
            message: "What are its features?",
        },
        {
            type: "input",
            name: "test",
            message: "How did you test this application?",   
        },
        {
            type: "checkbox",
            name: "license",
            message: "What License(s) are you using?",
            choices: ["MIT", "GNU GPLv3", "ISC"],

        },
        {
            type: "input",
            name: "fileName",
            message: "What is the name of the file?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub user name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ])

    .then((answers) => {
        const readMe = writeToFile(answers);

        fs.writeFile("README.md", readMe, (err) =>
        err ? console.log(err) : console.log("Success! Your new README file is ready!")
        );
    });


const writeToFile = (answers) =>
`# ${answers.title}

![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)  
## Description
${answers.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#test)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
[Click](${answers.video}) this link watch video walkthrough for this app. 
## License
This application is under the ${answers.license} license.  
## Contributing
${answers.contributing}.
## Tests
This application was tested using "${answers.test}"
## Questions
For more information, please visit [GitHub Profile](https://github.com/${answers.github}/).  
For any questions, you may email me at ${answers.email}.`