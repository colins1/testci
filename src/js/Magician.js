import Character from '../js/Character';

export default class Magician extends Character {
    constructor (name, type) {
        super(name, type);
        this.setStats();
    }
};