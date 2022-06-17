import Character from '../js/Character';

export default class Swordsman extends Character {
  constructor (name, type) {
    super(name, type);
    this.setStats();
  }
};