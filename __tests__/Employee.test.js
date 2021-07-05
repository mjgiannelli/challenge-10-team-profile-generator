// we need to test name tobe the name we pass through
// we need to test that the ID is equal to any number
// we need to test that getName has the property of name
// we need to test that getEmail has the property of email
// we need to test that getID has the property of ID
// we need to test that getRole has the property of role

const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('dave@gmail.com');
    expect(employee.role).toBe('Employee');
})

test('gets employees name as an object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.getName()).toHaveProperty('name');
})

test('gets employees email as an object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.getEmail()).toHaveProperty('email');
})

test('gets employees id as an object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.getId()).toHaveProperty('id');
})

test('gets employees role as an object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.getRole()).toHaveProperty('role');
})