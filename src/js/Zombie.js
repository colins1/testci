import Character from '../js/Character';

export default class Zombie extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };