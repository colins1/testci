import Character from '../js/Character';

export default class Undead extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };