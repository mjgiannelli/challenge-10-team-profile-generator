// need to test for creating an engineer object
// we need to test name tobe the name we pass through
// we need to test that the ID is equal to any number
// we need to test that getName has the property of name
// we need to test that getEmail has the property of email
// we need to test that getID has the property of ID
// we need to test that getRole has the property of role

const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'Harvard');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('Harvard');
})

test('gets interns name as an object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com');

    expect(intern.getName()).toHaveProperty('name');
})

test('gets interns email as an object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com');

    expect(intern.getEmail()).toHaveProperty('email');
})

test('gets interns id as an object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com');

    expect(intern.getId()).toHaveProperty('id');
})

test('gets interns role as an object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com');

    expect(intern.getRole()).toHaveProperty('role');
})

test('gets interns school as an object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'Harvard');

    expect(intern.getSchool()).toHaveProperty('school');
})