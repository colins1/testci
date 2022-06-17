import Bowerman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

class ResultBowman {
  constructor () {
    this.name = 'max',
    this.type = 'Bowman',
    this.health = 100,
    this.level = 1,
    this.attack = 25,
    this.defense = 25
  }
};

class ResultSwordsman {
  constructor () {
  this.name = 'max',
  this.type = 'Swordsman',
  this.health = 100,
  this.level = 1,
  this.attack = 40,
  this.defense = 10
}
};
class ResultMagician {
  constructor () {
  this.name = 'max',
  this.type = 'Magician',
  this.health = 100,
  this.level = 1,
  this.attack = 10,
  this.defense = 40
}
};
class ResultDaemon {
  constructor () {
  this.name = 'max',
  this.type = 'Daemon',
  this.health = 100,
  this.level = 1,
  this.attack = 10,
  this.defense = 40
}
};
class ResultUndead {
  constructor () {
  this.name = 'max',
  this.type = 'Undead',
  this.health = 100,
  this.level = 1,
  this.attack = 25,
  this.defense = 25
}
};
class ResultZombie {
  constructor () {
  this.name = 'max',
  this.type = 'Zombie',
  this.health = 100,
  this.level = 1,
  this.attack = 40,
  this.defense = 10
  }
};

test('should Bowerman', () => {
  const Result1 = new Bowerman('max','Bowman');
  const Result11 = new ResultBowman();
  expect(Result1.Bowerman).toEqual(Result11.ResultBowman);
});

test('should Swordsman', () => {
  const Result2 = new Swordsman('max','Swordsman');
  const Result22 = new ResultSwordsman();
  expect(Result2.Swordsman).toEqual(Result22.ResultSwordsman);
});

test('should Magician', () => {
  const Result3 = new Magician('max','Magician');
  const Result33 = new ResultMagician();
  expect(Result3.Magician).toEqual(Result33.ResultMagician);
});

test('should Daemon', () => {
  const Result4 = new Daemon('max','Daemon');
  const Result44 = new ResultDaemon();
  expect(Result4.Daemon).toEqual(Result44.ResultDaemon);
});

test('should Undead', () => {
  const Result5 = new Undead('max','Undead');
  const Result55 = new ResultUndead();
  expect(Result5.Undead).toEqual(Result55.ResultUndead);
});

test('should Zombie', () => {
  const Result6 = new Zombie('max','Zombie');
  const Result66 = new ResultZombie();
  expect(Result6.Zombie).toEqual(Result66.ResultZombie);
});

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
    new Daemon('max','Zombier'); 
  }).toThrow('you selected a non-existent type');
});
