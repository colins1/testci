import params from '../js/params';

export default class Character {
  constructor (name, type) {
    this.name = this.nameEdit(name);
    this.type = this.typeEdit(type);
  }

  setStats() {
    this.health = 100;
    this.level = 1;
    this.attack = params[this.type].attack;
    this.defence = params[this.type].defense;
  };

  
  nameEdit(name) {
    if (name.length < 2) {
     throw new Error('min 3 string');
    }
    if (name.length > 10) {
      throw new Error('max 10 string');
    }
    console.log(typeof name);
    if (typeof name !== 'string') {
      throw new Error('please edit to string');
    }
      return name;
  };

  typeEdit(type) {
    if (type in params) {
      return type;
    }
    throw new Error('you selected a non-existent type');
  };
}


