// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: '\u2665 What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: '\u2665 How would you describe this project?/What does your project do?',
    },
    {
      type: 'input',
      name: 'installation',
      message: '\u2665 How can someone install your project? ',
    },
    {
      type: 'input',
      name: 'usage',
      message: '\u2665 What problems does it solve? ',
    },
    {
      type: 'input',
      name: 'contributing',
      message: '\u2665 Were there any contributors?',
    },
    {
      type: 'input',
      name: 'tests',
      message: '\u2665 Have you tested the project?',
    },
    {
      type: 'list',
      name: 'license',
      message: '\u2665 What license are you using for this project?',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: '\u2665 What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: '\u2665 What is your email address?',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data, (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('\u2618 Done! \u2618 Wrote to README.md');
    }
  });
}
// TODO: Create a function to initialize app
function init() {

    inquirer.prompt (questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md',markdown);
    });
} 

// Function call to initialize app
init();
