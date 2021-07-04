// user starts the application
// user is prompted to enter the team manager's name, employee ID, email address, and office number
// after entering the user is then presented with a list menu to enter and engineer, intern, or finish building team
// if selects engineer
// user is prompted to enter their name, id, email and github username and then taken back to the same menu
// if user selects the intern option
// user is prompted to enter their name, id, email, school, and then taken back to the menu
// when user decides to finish building her team, the user exits out of the application and the html is generated

// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Organization {
    constructor() {
        this.manager;
        this.engineer;
        this.intern;
        this.employees = [];
    };

    initializeOrganization() {
        inquirer
            .prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is your name? (Required)',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your name!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'id',
                        message: 'What is your employee ID? (Required)',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Please enter your employee ID!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is your email address? (Required)',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Please enter your email address!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'officeNumber',
                        message: 'What is your office number? (Required)',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                console.log('Please enter your office number!');
                                return false;
                            }
                        }
                    }
                ])
            .then((managerData) => {
                this.manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                this.employees.push(this.manager);
                console.log(this.employees);
                
            })
    }
}

module.exports = Organization;