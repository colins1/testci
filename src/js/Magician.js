import Character from '../js/basic';

export default class Magician extends Character {
    constructor (name, type) {
        super(name, type);
        this.setStats();
    }
};