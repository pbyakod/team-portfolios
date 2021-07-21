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
            var {name, employee_id, email_address, github_id} = answers;
            var person = new Engineer(name, employee_id, email_address, github_id);
            employees.push(person);
        })
        var {another} = answer;
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
        var {another} = answer;
        switch(another) {
            case 'Yes':
                addIntern();
            case 'No':
                generateHTML();
        }
}

function generateHTML() {
    fs.appendFileSync('./dist/index.html', headerHTML());
    for(var i = 0; i < employees.length; i++) {
        var position = employees[i].getPosition();
        switch(position) {
            case 'Engineer':
                const {name, employee_id, email_address, github_id} = employees[i];
                fs.appendFileSync('./dist/index.html', engineerHTML(name, employee_id, email_address, github_id));
            case 'Intern':
                const {name, employee_id, email_address, school_name} = employees[i];
                fs.appendFileSync('./dist/index.html', internHTML(name, employee_id, email_address, school_name));
            case 'Manager':
                const {name, employee_id, email_address, office_number} = employees[i];
                fs.appendFileSync('./dist/index.html', managerHTML(name, employee_id, email_address, office_number));
        }
    }
}

initialize();