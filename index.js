const inquirer = require('inquirer');
const fs = reequire('fs');

var prompt_questions = [
    {
        type: 'input',
        message: 'Enter the name of the TEAM MANAGER',
        name: 'team_manager',
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