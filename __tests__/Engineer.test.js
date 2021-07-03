// need to test for creating an engineer object
// we need to test name tobe the name we pass through
// we need to test that the ID is equal to any number
// we need to test that getName has the property of name
// we need to test that getEmail has the property of email
// we need to test that getID has the property of ID
// we need to test that getRole has the property of role

const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'davejg');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('davejg');
})

test('gets engineers name as an object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.getName()).toHaveProperty('name');
})

test('gets engineers email as an object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.getEmail()).toHaveProperty('email');
})

test('gets engineers id as an object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.getId()).toHaveProperty('id');
})

test('gets engineers role as an object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.getRole()).toHaveProperty('role');
})

test('gets engineers github as an object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'davejg');

    expect(engineer.getGithub()).toHaveProperty('github');
})