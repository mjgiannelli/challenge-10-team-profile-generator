// create a manager class that'll take in employee properties
// also add office number as a property

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email = '') {
        super(name, id, email);

        this.role = 'manager';
    }
}

module.exports = Manager;