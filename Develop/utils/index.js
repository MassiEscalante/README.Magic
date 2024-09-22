// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project?/What does your project do?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How can someone install your project? ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would someone use this project? ',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using for this project?',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data, (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('Bingo! Wrote to README.md');
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
