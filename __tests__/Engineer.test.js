const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.name).toBe('Don');
    expect(engineer.id).toBe('456');
    expect(engineer.email).toBe('don@email.com');
    expect(engineer.github).toBe('doncodes');

});

test("gets engineer's name", () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.getName()).toBe('Don');
});

test("gets engineer's ID", () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.getId()).toBe('456');
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.getEmail()).toBe('don@email.com');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.getGithub()).toBe('doncodes');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Don', '456', 'don@email.com', 'doncodes');

    expect(engineer.getRole()).toBe('Engineer');
});
