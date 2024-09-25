// TODO: Include packages needed for this application
import colors from 'colors';
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: '\u2665 What is the title of your project?'.brightWhite,
    },
    {
      type: 'input',
      name: 'description',
      message: '\u2665 How would you describe this project?/What does your project do?'.magenta,
    },
    {
      type: 'input',
      name: 'installation',
      message: '\u2665 How can someone install your project? '.yellow,
    },
    {
      type: 'input',
      name: 'usage',
      message: '\u2665 What problems does it solve? '.green,
    },
    {
      type: 'input',
      name: 'contributing',
      message: '\u2665 Were there any contributors?'.blue,
    },
    {
      type: 'input',
      name: 'tests',
      message: '\u2665 Have you tested the project?'.magenta,
    },
    {
      type: 'list',
      name: 'license',
      message: '\u2665 What license are you using for this project?'.rainbow,
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: '\u2665 What is your GitHub username?'.cyan,
    },
    {
      type: 'input',
      name: 'email',
      message: '\u2665 What is your email address?'.white,
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    
    if (fs.existsSync(fileName)) {
      fs.unlinkSync(fileName);
    }
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log('Error writing to file'.bgRed); 
      } else {
        console.log('\u2618 Done! \u2618 Wrote to README.md'.bold.green);
      }
    });
  } catch (error) {
    console.error('Error during file handling:', error);
  }
}
// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);

    console.log("Responses: ", responses);      
    console.log("Generated Markdown: ", markdown); 

    writeToFile('README.md', markdown); 
  });
}
// Function call to initialize app

init();
