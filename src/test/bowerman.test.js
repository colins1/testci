import Bowerman from '../js/Bowerman';

test('should return the created Bowerman', () => {
  expect(new Bowerman('max','Bowman')).toEqual({
    name: 'max',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25
  });
});