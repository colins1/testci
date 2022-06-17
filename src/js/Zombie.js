import Character from '../js/basic';

export default class Zombie extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };