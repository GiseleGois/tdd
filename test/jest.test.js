test('devo conhecer as principais assertivas do jest', () => {
  let number = null;
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('devo saber trabalhar com objetos', () => {
  const obj = { name: 'Gisele', mail: 'gisele@gmail' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Gisele');
  expect(obj.name).toBe('Gisele');

  const obj2 = { name: 'Gisele', mail: 'gisele@gmail' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
