const inquirer = require('inquirer');
const fs = require('fs');
const util = require("utils");

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?"
    name: "Title"
}, {
    type: "input", 
    message: "Give a detailed description of what this project was about.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install this application?",
    name: "Installation"
}, {
    type: "input",
    messsage: "How is this application used?",
    name: "Usage"
}, {
    type: "input",
    message: "What license is being used for your project? (MIT, Apache, GPL)",
    name: "License"
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
    message: "Contact information for inquiries.",
    name: "Questions"
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log('Hello');