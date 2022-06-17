import Character from '../js/Character';

export default class Daemon extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };