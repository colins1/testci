import Undead from '../js/Undead';
test('should return the created Undead', () => {
  expect(new Undead('John')).toEqual({
    name: 'max',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25
  });
});