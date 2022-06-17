import Character from '../js/Character';

export default class Bowerman extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };