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
    }

    {   
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    }

    {   
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    }

    {
      type: 'input',
      name: 'Usage',
      message: 'How does someone use the project?',

    }

    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the authors or main contributors?',
  
    }

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    }

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
