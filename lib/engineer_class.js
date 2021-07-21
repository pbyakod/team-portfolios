const Employee = require('./employee_class');

class Engineer extends Employee {
    constructor(team_manager, employee_id, email_address, github_id) {
        super(team_manager, employee_id, email_address);
        this.github_id = github_id;
    }
    getGithubId() {
        return this.github_id;
    }
    getPosition() {
        return 'Engineer';
    }
}

module.exports = Engineer;