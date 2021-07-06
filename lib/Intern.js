// create a manager class that'll take in employee properties
// also add school as a property
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id, email = '', school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return {
            school: this.school
        }
    }
}

module.exports = Intern;