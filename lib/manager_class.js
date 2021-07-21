const Employee = require('./employee_class');

class Manager extends Employee {
    constructor(team_manager, employee_id, email_address, office_number) {
        super(team_manager, employee_id, email_address);
        this.office_number = office_number;
    }
    getPosition() {
        return 'Manager';
    }
}

module.exports = Manager;