// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your application?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How do you use your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application:',
        choices: ['MIT', 'Apache', 'GNU'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generatedFile = generateMarkdown(data);
    // console.log(generatedFile);
    fs.writeFile(`${fileName}.md`, generatedFile, (err) => err ? console.log("something wrong") : console.log('success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            console.log(responses)

            fs.writeFileSync("./GeneratedREADME.md", generateMarkdown({ ...responses }))
        })
}

// Function call to initialize app
init();
