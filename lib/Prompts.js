const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const generateEmployeeCardHtml = require('../src/pageTemplate')

employeeData = []
module.exports = function () {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'ManagerName',
                message: "Enter the Team Manager's name:"
            },
            {
                type: 'input',
                name: 'ManagerId',
                message: "Enter the Team Manager's Employee ID:"
            },
            {
                type: 'input',
                name: 'ManagerEmail',
                message: "Enter the Team Manager's Email Address:"
            },
            {
                type: 'input',
                name: 'ManagerOffice',
                message: "Enter the Team Manager's Office Number:"
            },
        ])
        .then(answers => {
            employeeData.push(
                new Manager(
                    answers.ManagerName,
                    answers.ManagerId,
                    answers.ManagerEmail,
                    answers.ManagerOffice
                )
            )
        })
        .then(addEmployeePrompt)
}


const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the Engineer's Name:",
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the Engineer's Employee ID:",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the Engineer's Email Address:",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the Engineer's Github Username:",
        }
    ])
    .then(answers => {
        employeeData.push(
            new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            )
        )
    })
    .then(addEmployeePrompt)
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the Intern's Name:",
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the Intern's Employee ID:",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the Intern's Email Address:",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the Intern's School:",
        }
    ])
    .then(answers => {
        employeeData.push(
            new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            )
        )
    })
    .then(addEmployeePrompt)
}

const addEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Choose an option:",
            choices: ["Add an Engineer to the team", "Add an Intern to the team", "Finish Building my Team"]
        }
    ]).then(response => {
        if (response.options === "Finish Building my Team") {
            return generateEmployeeCardHtml(employeeData)
        }
        else if (response.options === "Add an Engineer to the team") {
            addEngineer()
        }
        else if (response.options === "Add an Intern to the team") {
            addIntern()
        }
    })
}
