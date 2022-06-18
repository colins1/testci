import Daemon from '../js/Daemon';
test('should return the created Daemon', () => {
  expect(new Daemon('John')).toEqual({
    name: 'max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40
  });
});