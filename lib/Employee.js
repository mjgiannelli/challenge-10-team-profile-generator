// create a parent employee class that manager, engineer, & intern will take in
// the shared traits are:
// name
// ID
// email

class Employee {
    constructor(name = '', id, email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee';
    }

    getName() {
        return {
            name: this.name
        }
    }

    getEmail() {
        return {
            email: this.email
        }
    }

    getId() {
        return {
            id: this.id
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Employee;