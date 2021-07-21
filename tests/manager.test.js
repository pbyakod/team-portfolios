const Manager = require("../lib/Manager");

describe('Manager', () => {
    it('displays object parameters', () => {
        const person = new Manager("Jared", 1, "jared@fakemail.com", 1)
        expect(person.name).toEqual("Jared");
        expect(person.employee_id).toEqual(1);
        expect(person.email_address).toEqual("jared@fakemail.com");
        expect(person.position).toEqual("Manager");
        expect(person.office_number).toEqual(1);
    })

    it('display parameters from functions', () => {
        const person = new Manager("Jared", 1, "jared@fakemail.com", 1)
        expect(person.getName()).toEqual("Jared");
        expect(person.getEmployeeId()).toEqual(1);
        expect(person.getEmailAddress()).toEqual("jared@fakemail.com");
        expect(person.getPosition()).toEqual("Manager");
    })
})