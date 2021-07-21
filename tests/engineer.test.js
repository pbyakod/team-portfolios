const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("display object parameters", () => {
        const person = new Engineer("Grace", 3, "grace@fakemail.com", "gchoi2u");
        expect(person.name).toEqual("Grace");
        expect(person.employee_id).toEqual(3);
        expect(person.email_address).toEqual("grace@fakemail.com");
        expect(person.position).toEqual("Engineer")
        expect(person.github_id).toEqual("gchoi2u")
    });

    it('display parameters from functions', () => {
        const person = new Engineer("Grace", 3, "grace@fakemail.com", "gchoi2u");
        expect(person.getName()).toEqual("Grace");
        expect(person.getEmployeeId()).toEqual(3);
        expect(person.getEmailAddress()).toEqual("grace@fakemail.com");
        expect(person.getPosition()).toEqual("Engineer")
        expect(person.getGithubId()).toEqual("gchoi2u")
    })
})