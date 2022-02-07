const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.name).toBe('Andre');
    expect(intern.id).toBe('789');
    expect(intern.email).toBe('andre@email.com');
    expect(intern.school).toBe('Georgia Tech');

});

test("gets intern's name", () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.getName()).toBe('Andre');
});

test("gets intern's ID", () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.getId()).toBe('789');
});

test("gets intern's email", () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.getEmail()).toBe('andre@email.com');
});

test("gets intern's school", () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.getSchool()).toBe('Georgia Tech');
});

test("gets intern's role", () => {
    const intern = new Intern('Andre', '789', 'andre@email.com', 'Georgia Tech');

    expect(intern.getRole()).toBe('Intern');
});
