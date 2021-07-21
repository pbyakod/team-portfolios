class Employee {
    constructor(name, employee_id, email_address) {
        this.name = name;
        this.employee_id = employee_id;
        this.email_address = email_address;
    }
    getTeamManager() {
        return this.name;
    }
    getEmployeeId() {
        return this.employee_id;
    }
    getEmailAddress() {
        return this.email_address;
    }
}

module.exports = Employee;