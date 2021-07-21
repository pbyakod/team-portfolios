const Intern = require("../lib/Intern");

describe ("Intern", () => {
    it('display object parameters', () => {
        const person = new Intern("John", 5, "john@fakemail.com", "2University");
        expect(person.name).toEqual("John");
        expect(person.employee_id).toEqual(5);
        expect(person.email_address).toEqual("john@fakemail.com");
        expect(person.position).toEqual("Intern");
        expect(person.school_name).toEqual("2University");
    })

    it('display parameters from functions', () => {
        const person = new Intern("John", 5, "john@fakemail.com", "2University");
        expect(person.getName()).toEqual("John");
        expect(person.getEmployeeId()).toEqual(5);
        expect(person.getEmailAddress()).toEqual("john@fakemail.com");
        expect(person.getPosition()).toEqual("Intern");
        expect(person.getSchoolName()).toEqual("2University");
    })
})