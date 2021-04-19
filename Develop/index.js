const inquirer = require('inquirer');
const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input", 
    message: "Give a detailed description of what this project was about",
    name: "Description"
}, {
    type: "input",
    message: "What does the user need to install this application?",
    name: "Installation"
}, {
    type: "list",
    message: "What license is being used for your project?",
    name: "License",
    choices: ["MIT", "Apache", "GPL"],
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}, {
    type: "input",
    message: "Who was the contributor in this application?",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, 

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
writeToFile("README.md", generatorMarkdown(data));
    })

}

// Function call to initialize app
init();

// console.log('Hello');