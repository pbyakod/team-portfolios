const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('displays object parameters', () => {
        const person = new Employee("Alec", 2, "alec@fakemail.com")
        expect(person.name).toEqual("Alec");
        expect(person.employee_id).toEqual(2);
        expect(person.email_address).toEqual("alec@fakemail.com");
        expect(person.position).toEqual("Employee");
    });

    it('displays parameters from functions', () => {
        const person = new Employee("Alec", 2, "alec@fakemail.com")
        expect(person.getName()).toEqual("Alec");
        expect(person.getEmployeeId()).toEqual(2);
        expect(person.getEmailAddress()).toEqual("alec@fakemail.com");
        expect(person.getPosition()).toEqual("Employee");
    })
});