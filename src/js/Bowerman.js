import Character from '../js/basic';

export default class Bowerman extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };