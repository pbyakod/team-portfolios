const fs = reequire('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager_class');

const employees = [];

var prompt_questions = [
    {
        type: 'input',
        message: 'Enter the NAME of the team manager',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the EMPLOYEE ID',
        name: 'employeee_id',
    },
    {
        type: 'input',
        message: 'Enter a valid EMAIL ADDRESS',
        name: 'email_address',
    },
    {
        type: 'input',
        message: 'Enter the corresponding OFFICE NUMBER',
        name: 'office_number',
    },
]

var engineer_questions = [
    {
        type: 'input',
        message: 'Enter your NAME',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your EMPLOYEE ID',
        name: 'employeee_id',
    },
    {
        type: 'input',
        message: 'Enter a valid EMAIL ADDRESS',
        name: 'email_address',
    },
    {
        type: 'input',
        message: 'Enter your GITHUB username',
        name: 'github_id',
    },
]

function initialize() {
    inquirer.prompt(prompt_questions)
        .then(answers => {
            var {name, employee_id, email_address, office_number} = answers;
            var person = new Manager(name, employee_id, email_address, office_number);
            employees.push(person);
            updateEmployees();
        })
        .catch(err => {
            console.log('ERROR!', err);
        });
}

function updateEmployees() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Are you adding an ENGINEER or an INTERN?',
            choices: ['Engineer', 'Intern'],
            name: 'position'
        }
    ])
    .then(answer => {
        var {position} = answer;
        switch(position) {
            case 'Engineer':
                addEngineer();
            case 'Intern':
                addIntern();
            default:
                break;
        }
    })
}
