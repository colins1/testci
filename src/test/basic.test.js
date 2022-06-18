import Daemon from '../js/Daemon';

test('name check < 2', () => {
  expect(() => {
    new Daemon('m','Daemon'); 
  }).toThrow('min 3 string');
});

test('name check > 10', () => {
  expect(() => {
    new Daemon('maxaxaxaxaxaxax','Daemon'); 
  }).toThrow('max 10 string');
});

test('name check string', () => {
  expect(() => {
    new Daemon(3234138,'Daemon'); 
  }).toThrow('please edit to string');
});

test('type check', () => {
  expect(() => {
    new Daemon('max','Daemoner'); 
  }).toThrow('you selected a non-existent type');
});
