import Zombie from '../js/Zombie';

test('should return the created Zombie', () => {
  expect(new Zombie('John')).toEqual({
    name: 'max',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10
  });
});