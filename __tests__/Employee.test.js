const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Maddie', '123', 'maddie@email.com');

    expect(employee.name).toBe('Maddie');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('maddie@email.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Maddie', '123', 'maddie@email.com');

    expect(employee.getName()).toBe('Maddie');
});

test("gets employee's ID", () => {
    const employee = new Employee('Maddie', '123', 'maddie@email.com');

    expect(employee.getId()).toBe('123');
});

test("gets employee's email", () => {
    const employee = new Employee('Maddie', '123', 'maddie@email.com');

    expect(employee.getEmail()).toBe('maddie@email.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Maddie', '123', 'maddie@email.com');

    expect(employee.getRole()).toBe('Employee');
});
