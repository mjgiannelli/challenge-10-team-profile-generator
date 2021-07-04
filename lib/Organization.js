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
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site')

class Organization {
    constructor() {
        this.manager;
        this.engineer;
        this.intern;
        this.employees = [];
    };

    // asks manager questions to create manager object
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
            // create manager object and push object to empty employees array
            .then((managerData) => {
                this.manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                this.employees.push(this.manager);
                this.checkForNewEmployee();
            })
            .then(employeeData => {
                return generatePage(employeeData);
            })
            .then(pageHtml => {
                return writeFile(pageHtml);
            })
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
            .catch(err => {
                console.log(err);
            })
    }

    checkForNewEmployee() {
        inquirer
            .prompt({
                type: 'list',
                message: 'Would you like to add another employee?',
                name: 'decision',
                choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
            })
            .then(({ decision }) => {
                if(decision === 'Add Engineer') {
                    this.addEngineer();
                } else if (decision === 'Add Intern') {
                    this.addIntern();
                } else {
                    return this.employees;
                }
            })
    }

    addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is your engineer's name? (Required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter their name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is your engineer's employee ID? (Required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter their employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is your engineer's email address? (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter their email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "What is your engineer's GitHub Username? (Required)",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter their GitHub username!');
                            return false;
                        }
                    }
                }
            ])

            // creates new engineer object and pushes to employees array
            .then((engineerData) => {
                this.engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                this.employees.push(this.engineer);
                console.log(this.employees);
                return this.checkForNewEmployee();
            })
    }

    addIntern() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is your intern's name? (Required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter their name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is your intern's employee ID? (Required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter their employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is your intern's email address? (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter their email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'school',
                    message: "What college does your intern attend? (Required)",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter the name of their college!');
                            return false;
                        }
                    }
                }
            ])
             // creates new intern object and pushes to employees array
            .then((internData) => {
                this.intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                this.employees.push(this.intern);
                console.log(this.employees);
                return this.checkForNewEmployee();
            })
    }
}

module.exports = Organization;