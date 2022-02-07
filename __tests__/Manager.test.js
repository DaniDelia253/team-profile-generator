const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Kirsten', '1', 'kirsten@email.com', '700');

    expect(manager.name).toBe('Kirsten');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('kirsten@email.com');
    expect(manager.officeNumber).toBe('700');

});

test("gets manager's name", () => {
    const manager = new Manager('Kirsten', '1', 'kirsten@email.com', '700');

    expect(manager.getName()).toBe('Kirsten');
});

test("gets manager's ID", () => {
    const manager = new Manager('Kirsten', '1', 'kirsten@email.com', '700');

    expect(manager.getId()).toBe('1');
});

test("gets manager's email", () => {
    const manager = new Manager('Kirsten', '1', 'kirsten@email.com', '700');

    expect(manager.getEmail()).toBe('kirsten@email.com');
});

test("gets manager's role", () => {
    const manager = new Manager('Kirsten', '1', 'kirsten@email.com', '700');

    expect(manager.getRole()).toBe('Manager');
});
