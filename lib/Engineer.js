// create a manager class that'll take in employee properties
// also add github usernam as a property
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id, email = '', github) {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return {
            github: this.github
        }
    }
}

module.exports = Engineer;