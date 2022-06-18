import Bowerman from '../js/Bowerman';

test('should return the created Bowerman', () => {
  expect(new Bowerman('John')).toEqual({
    name: 'max',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25
  });
});