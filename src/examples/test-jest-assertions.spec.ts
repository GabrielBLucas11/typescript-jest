describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);

    expect(number).toBeCloseTo(10.001, 1);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should tetst jest assertions with objects ', () => {
    const person = { name: 'Gabriel', age: 23 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('name', 'Gabriel');
  });
});
