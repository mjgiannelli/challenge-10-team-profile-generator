// need to test for creating a manager object
// we will create a mock employee
// we need to test name tobe the name we pass through
// we need to test that the ID is equal to any number
// we need to test that getName has the property of name
// we need to test that getEmail has the property of email
// we need to test that getID has the property of ID
// we need to test that getRole has the property of role

const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com', 6);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.role).toBe('manager');
    expect(manager.officeNumber).toBe(6);
})

test('gets managers name as an object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.getName()).toHaveProperty('name');
})

test('gets managers email as an object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.getEmail()).toHaveProperty('email');
})

test('gets managers id as an object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.getId()).toHaveProperty('id');
})

test('gets managers role as an object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.getRole()).toHaveProperty('role');
})