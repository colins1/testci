import Character from '../js/basic';

export default class Swordsman extends Character {
  constructor (name, type) {
    super(name, type);
    this.setStats();
  }
};