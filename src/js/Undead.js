import Character from '../js/basic';

export default class Undead extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };