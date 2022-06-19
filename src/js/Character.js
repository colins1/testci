import params from '../js/params';

export default class Character {
  constructor (name, type) {
    if (name.length < 2) {
      throw new Error('min 3 string');
    }else if (name.length > 10){
      throw new Error('max 10 string');
    }else if (typeof name !== 'string') {
      throw new Error('please edit to string');
    }else {
      this.name = name;
    }
    if (type in params) {
      this.type = type;
    } else {
      throw new Error('you selected a non-existent type');
    }
    this.health = 100;
    this.level = 1;
    this.attack = params[this.type].attack;
    this.defence = params[this.type].defense;
  }
}


