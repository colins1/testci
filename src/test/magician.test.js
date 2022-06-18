import Magician from '../js/Magician';
test('should return the created Magician', () => {
  expect(new Magician('John')).toEqual({
    name: 'max',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40
  });
});