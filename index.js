const fs = reequire('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer_class');
const Intern = require('./lib/intern_class');
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
    {
        type: 'list',
        message: 'Do you want to ADD another engineer?',
        choices: ['Yes', 'No'],
        name: 'another'
    }
]

var intern_questions = [
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
        message: 'Enter the SCHOOL NAME of the intern',
        name: 'school_name',
    },
    {
        type: 'list',
        message: 'Do you want to ADD another intern?',
        choices: ['Yes', 'No'],
        name: 'another'
    }

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
            type: 'list',
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
        }
    })
}

function addEngineer() {
    inquirer.prompt(engineer_questions)
        .then(answers => {
            var {name, employee_id, email_address, office_number} = answers;
            var person = new Engineer(name, employee_id, email_address, office_number);
            employees.push(person);
        })
        switch(another) {
            case 'Yes':
                addEngineer();
            case 'No':
                generateHTML();
        }
}

function addIntern() {
    inquirer.prompt(intern_questions)
        .then(answers => {
            var {name, employee_id, email_address, office_number} = answers;
            var person = new Intern(name, employee_id, email_address, office_number);
            employees.push(person);
        })
        switch(another) {
            case 'Yes':
                addIntern();
            case 'No':
                generateHTML();
        }
}