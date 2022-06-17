const params = {
  Bowman: {
    attack: 25,
    defense: 25,
  },
  Swordsman: {
    attack: 40,
    defense: 10,
  },
  Magician: {
    attack: 10,
    defense: 40,
  },
  Undead: {
    attack: 25,
    defense: 25,
  },
  Zombie: {
    attack: 40,
    defense: 10,
  },
  Daemon: {
    attack: 10,
    defense: 40,
  }
};


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
  }

  
  nameEdit(name) {
    if (typeof name !== 'string') {
      throw new Error('please edit to string');
    }
    if (name.length < 1) {
     throw new Error('min 3 string');
    }
    if (name.length > 15) {
      throw new Error('max 10 string');
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


