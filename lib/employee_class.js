class Employee {
    constructor(team_manager, employee_id, email_address) {
        this.team_manager = team_manager;
        this.employee_id = employee_id;
        this.email_address = email_address;
    }
    getTeamManager() {
        return this.team_manager;
    }
    getEmployeeId() {
        return this.employee_id;
    }
    getEmailAddress() {
        return this.email_address;
    }
}

module.exports = Employee;