const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([

    { //Title
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    { //Subhead
        type: 'input',
        name: 'subhead',
        message: 'Please enter a one-sentence blurb describing the project.'
    },
    { //Description
        type: 'input',
        name: 'description',
        message: 'Write your detailed project description here.'
    },
    { //Installation
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.'
    },
    { //Usage
        type: 'input',
        name: 'usage',
        message: 'What does a user do with this project?'
    },
    { //License
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Apache-2.0',
            'ISC']
    },
    { //Badge
        type: 'input',
        name: 'badge',
        message: 'Paste your badge URL here. (For info and choice, https://shields.io/)'
    },
    { //Contributing
        type: 'input',
        name: 'contributing',
        message: 'Can users contribute, and if so, how?'
    },
    { //Screenshots
        type: 'input',
        name: 'screenshot',
        message: 'Enter the screenshot or walkthrough URL here.'
    },
    { //Tests
        type: 'input',
        name: 'test',
        message: 'Run and list tests here.'
    },
    //Contact
    { //GitHub SN
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    { //GitHub URL
        type: 'input',
        name: 'githubURL',
        message: 'What is your GitHub profile URL?'
    },
]).then(answers => {
    const { title, badge, subhead, description, installation, usage, contributing, screenshot, test, github, githubURL, license } = answers;

    //README Template

const READMEfile = `# ${title}
![GitHub license](${badge})

### ${subhead}

## *Table of Contents*

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## *Description*
${description}

## *Installation*
${installation}

## *Usage*
${usage}

## *Screenshots*
![](${screenshot})

## *Contributing*
${contributing}

## *Tests*
${test}

## *Questions?*
- Github: [${github}](${githubURL})

---
This project is ${license} licensed. &copy; 2021`

fs.writeFile("README.md", READMEfile, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Thank you! Your README file is ready.");
    }
});

});