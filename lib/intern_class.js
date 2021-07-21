const Employee = require('./employee_class');

class Intern extends Employee {
    constructor(team_manager, employee_id, email_address, school_name) {
        super(team_manager, employee_id, email_address);
        this.school_name = school_name;
    }
    getSchoolName() {
        return this.school_name;
    }
    getPosition() {
        return 'Intern';
    }
}

module.exports = Intern;